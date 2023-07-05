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
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

async function getList(category, page = 1) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`,
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
            `https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=videos,credits`,
            options
        );
        const json = await response.json();
        // console.log("----", json);
        return json;

    } catch (error) {
        console.error(error);
    }
}

async function getMovies({query, adult, page, year}) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=${adult}&language=en-US&primary_release_year=${year}&page=${page}`,
            options)
        const json = await response.json();
        // console.log("----", json);
        return json;

    } catch (error) {
        console.error(error);
    }

}

export {getConfig, getList, getMovie, getMovies}
