import axios from "axios";
import {orderMiddleware, queryMiddleware, sortMiddleware} from "./middlewares";
import {decodeWindows1251} from "./utils";
// const { URL, URLSearchParams } = require("url");
import {AuthorizationError, NotAuthorizedError} from "./errors";


class PageProvider {
  constructor(host = "https://rutracker.org", httpClientConfigs = {}) {
    this.authorized = false;
    this.cookie = null;
    this.host = host;
    this.loginUrl = `${this.host}/forum/login.php`;
    this.searchUrl = `${this.host}/forum/tracker.php`;
    this.threadUrl = `${this.host}/forum/viewtopic.php`;
    this.downloadUrl = `${this.host}/forum/dl.php`;

    this.searchMiddlewares = [queryMiddleware, sortMiddleware, orderMiddleware];
    this.request = axios.create(httpClientConfigs);
  }

  login(username, password) {
    const body = new URLSearchParams();

    body.append("login_username", username);
    body.append("login_password", password);
    body.append("login", "Вход");

    return this.request({
      url: this.loginUrl,
      method: "POST",
      data: body.toString(),
      maxRedirects: 0,
      validateStatus(status) {
        return status === 302;
      },
    })
      .then((response) => {
        const setCookie = response.headers["set-cookie"];
        this.cookie = Array.isArray(setCookie)
          ? setCookie.map((cookie) => cookie.split(";")[0]).join(";")
          : setCookie.split(";")[0];
        this.authorized = true;

        return true;
      })
      .catch(() => {
        throw new AuthorizationError();
      });
  }

  search(params) {
    if (!this.authorized) {
      return Promise.reject(new NotAuthorizedError());
    }

    const url = new URL(this.searchUrl);
    const body = new URLSearchParams();

    try {
      this.searchMiddlewares.forEach((middleware) => {
        middleware(params, body, url);
      });
    } catch (err) {
      return Promise.reject(err);
    }

    return this.request({
      url: url.toString(),
      data: body.toString(),
      method: "POST",
      responseType: "arraybuffer",
      headers: {
        Cookie: this.cookie,
      },
    }).then((response) => decodeWindows1251(response.data));
  }

  thread(id) {
    if (!this.authorized) {
      return Promise.reject(new NotAuthorizedError());
    }

    const url = `${this.threadUrl}?t=${encodeURIComponent(id)}`;

    return this.request({
      url,
      method: "GET",
      responseType: "arraybuffer",
      headers: {
        Cookie: this.cookie,
      },
    }).then((response) => decodeWindows1251(response.data));
  }

  torrentFile(id) {
    if (!this.authorized) {
      return Promise.reject(new NotAuthorizedError());
    }

    const url = `${this.downloadUrl}?t=${encodeURIComponent(id)}`;

    return this.request({
      url,
      method: "GET",
      responseType: "stream",
      headers: {
        Cookie: this.cookie,
      },
    }).then((response) => response.data);
  }
}

export default PageProvider;
