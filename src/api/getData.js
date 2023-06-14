const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_ACCESS_TOKEN
    }
};

async function getConfig() {
    try {
        const response = await fetch("https://api.themoviedb.org/3/configuration", options);
        const json = await response.json();
        // console.log("--config--", json);
        return json;

    } catch (error) {
        console.error(error);
    }
}

async function getTopRated() {
    try {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=ru-US&page=3",
            options
        );
        const json = await response.json();
        // console.log("----", json);
        return json;

    } catch (error) {
        console.error(error);
    }
}

async function getMovie(id) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?language=ru-US&append_to_response=videos`,
            options
        );
        const json = await response.json();
        console.log("----", json);
        return json;

    } catch (error) {
        console.error(error);
    }

}

export {getConfig, getTopRated, getMovie}
