import Parser from "./lib/parser";
import PageProvider from "./lib/page-provider";

class RutrackerApi {
  constructor(host = "https://rutracker.org", httpClientConfigs = {}) {
    this.parser = new Parser(host);
    this.pageProvider = new PageProvider(host, httpClientConfigs);
  }

  login({ username, password }) {
    return this.pageProvider.login(username, password);
  }

  search({ query, sort, order }) {
    return this.pageProvider
      .search({ query, sort, order })
      .then((html) => this.parser.parseSearch(html));
  }

  download(id) {
    return this.pageProvider.torrentFile(id);
  }

  getMagnetLink(id) {
    return this.pageProvider
      .thread(id)
      .then((html) => this.parser.parseMagnetLink(html));
  }
}

export default RutrackerApi;
