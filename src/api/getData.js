const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: import.meta.env.VITE_ACCESS_TOKEN
	}
};

const baseUrl = "https://api.themoviedb.org/3";

const buildURL = ({extraPath = "", query = {}}) => {
	const queryParams = new URLSearchParams({...query});

	return `${baseUrl}${extraPath}?${queryParams.toString()}`;
}

async function getConfig() {
	try {
		const response = await fetch(`${baseUrl}/configuration`, options);
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

async function getList(category, page = 1) {
	try {
		const response = await fetch(
			`${baseUrl}/movie/${category}?language=en-US&page=${page}`,
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
			`${baseUrl}/movie/${id}?language=en-US&append_to_response=videos,credits`,
			options
		);
		const json = await response.json();
		// console.log("----", json);
		return json;

	} catch (error) {
		console.error(error);
	}
}

async function getMoviesBySearchQ(props) {
	// `${baseUrl}/search/movie?query=${query}&include_adult=${adult}&language=en-US&primary_release_year=${year}&page=${page}`
	console.log("----", buildURL({extraPath: "/search/movie", query: {...props}}));
	try {
		const response = await fetch(
			buildURL({extraPath: "/search/movie", query: {...props}}),
			options)
		
		const json = await response.json();
		// console.log("----", json);
		return json;

	} catch (error) {
		console.error(error);
	}
}

async function getMoviesByDiscoverQ(props) {
	try {
		const response = await fetch(
			buildURL({extraPath: "/discover/movie", query: {...props}}),
			options)
		const json = await response.json();
		// console.log("----", json);
		return json;

	} catch (error) {
		console.error(error);
	}
}

async function getGenres() {
	try {
		const response = await fetch(
			`${baseUrl}/genre/movie/list?language=en`,
			options)
		const json = await response.json();
		// console.log("----", json);
		return json;

	} catch (error) {
		console.error(error);
	}

}

export {
	getConfig,
	getList,
	getMovie,
	getGenres,
	getMoviesBySearchQ,
	getMoviesByDiscoverQ
}
