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

async function getList(category) {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
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

export {getConfig, getList, getMovie}
