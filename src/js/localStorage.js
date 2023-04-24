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

const getFromLocalStorage = (key, page) => {
  const data = JSON.parse(localStorage.getItem(key));
  const itemsPerPage = 15;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return data.slice(start, end);
};

export const getFromWatched = (page) => {
  const data = getFromLocalStorage("watched", page);
  return data;
};

export const getFromQueued = (page) => {
  const data = getFromLocalStorage("queue", page);
  return data;
};
