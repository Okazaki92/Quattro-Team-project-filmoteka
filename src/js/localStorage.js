const addToLocalStorage = (key, value) => {
	const data = JSON.parse(localStorage.getItem(key)) || [];
	data.push(value);
	localStorage.setItem(key, JSON.stringify(data));
};

export const addToWatched = (movie) => {
	addToLocalStorage("watched", movie);
};

export const addToQueue = (movie) => {
	addToLocalStorage("queue", movie);
};

export const isMovieInList = (key, movieId) => {
	const data = JSON.parse(localStorage.getItem(key)) || [];
	return data.some((movie) => movie.id === movieId);
};

export const removeFromList = (key, movieId) => {
	const data = JSON.parse(localStorage.getItem(key)) || [];
	const updatedData = data.filter((movie) => movie.id !== movieId);
	localStorage.setItem(key, JSON.stringify(updatedData));
};
const getFromLocalStorage = (key, value) => {
	const data = JSON.parse(localStorage.getItem(key));
	console.log(data);
	return data;
};

export const getFromWatched = (movie) => {
	const data = getFromLocalStorage("watched");
	console.log(data);
	return data;
};

export const getFromQueued = (movie) => {
	const data = getFromLocalStorage("queue");
	return data;
};