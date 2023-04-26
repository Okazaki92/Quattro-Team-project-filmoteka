import { isMovieInList } from "./local-storage";

const IMG_URL = "https://image.tmdb.org/t/p/original";
const IMG_URL_DEFAULT = "https://i.ibb.co/xq4LQMw/Filmoteka-by-Quattro.jpg";
const noInfo = "Sorry no information provided";

const renderDescription = (movie) => {
  const genre = movie.genres.map(({ name }) => name).join(", ");
  const isActiveWatched = isMovieInList('watched', movie.id) ? 'active' : '';
  const isActiveQueue = isMovieInList('queue', movie.id) ? 'active' : '';
	return `
            <img class="modal__image" src="${
							movie.poster_path ? IMG_URL + movie.poster_path : IMG_URL_DEFAULT
						}" alt="${movie.title || movie.name}">
            <div class="modal__textbox">
    <h2 class="modal__header">${movie.title || movie.name}</h2>
    <div class="modal__features">
      <div class="modal__features--keys">
        <p class="modal__feature">Vote / Votes</p>
        <p class="modal__feature">Popularity</p>
        <p class="modal__feature">Original Title</p>
        <p class="modal__feature">Genre</p>
      </div>
      <div class="modal__features--values">
      <p class="modal__feature"><button>${movie.vote_average.toFixed(
				1,
			)}</button> / ${movie.vote_count}</p>
        <p class="modal__feature">${movie.popularity}</p>
        <p class="modal__feature">${movie.original_title || movie.original_name}</p>
        <p class="modal__feature">${genre}</p>
      </div>
    </div>
    <div class="modal__description-container">
      <h3 class="modal__description-heading">ABOUT</h3>
      <p class="modal__description-text">${
				movie.overview ? movie.overview : noInfo
			}</p>
    </div>
    <div class="modal__buttons">
      <button class="modal__btn ${isActiveWatched}" data-btn="addToWatched">${isActiveWatched ? 'ADDED TO WATCHED' : 'ADD TO WATCHED'}</button>
      <button class="modal__btn ${isActiveQueue}" data-btn="addToQueue">${isActiveQueue ? 'ADDED TO QUEUE' : 'ADD TO QUEUE'}</button>
    </div>
  </div>`;
};
const renderFilmDescription = { renderDescription };
export default renderFilmDescription;
