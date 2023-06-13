import { isMovieInList } from './local-storage';
import * as basicLightbox from 'basiclightbox';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const IMG_URL_RETINA = 'https://image.tmdb.org/t/p/original';
const IMG_URL_DEFAULT = 'https://i.ibb.co/xq4LQMw/Filmoteka-by-Quattro.jpg';
const noInfo = 'Sorry no information provided';

const renderDescription = movie => {
  const genre = movie.genres.map(({ name }) => name).join(', ');
  const isActiveWatched = isMovieInList('watched', movie.id) ? 'active' : '';
  const isActiveQueue = isMovieInList('queue', movie.id) ? 'active' : '';
  return `
            <img class="modal__image" srcset="${
              movie.poster_path ? IMG_URL + movie.poster_path : IMG_URL_DEFAULT
            } 1x, 
			${movie.poster_path ? IMG_URL_RETINA + movie.poster_path : IMG_URL_DEFAULT} 2x" alt="${
    movie.title || movie.name
  }">
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
      <p class="modal__feature"><button>${movie.vote_average.toFixed(1)}</button> / ${
    movie.vote_count
  }</p>
        <p class="modal__feature">${movie.popularity}</p>
        <p class="modal__feature">${movie.original_title || movie.original_name}</p>
        <p class="modal__feature">${genre}</p>
      </div>
    </div>
    <div class="modal__description-container">
      <h3 class="modal__description-heading">ABOUT</h3>
      <p class="modal__description-text">${movie.overview ? movie.overview : noInfo}</p>
    </div>
    <div class="modal__buttons">
      <button class="modal__btn ${isActiveWatched}" data-btn="addToWatched">${
    isActiveWatched ? 'ADDED TO WATCHED' : 'ADD TO WATCHED'
  }</button>
      <button class="modal__btn ${isActiveQueue}" data-btn="addToQueue">${
    isActiveQueue ? 'ADDED TO QUEUE' : 'ADD TO QUEUE'
  }</button>
    </div>
    <div class="modal__video">
    <button class="modal__btn-video" data-btn="open-video" data-key=${movie.id}>
    <svg width="50px" height="20px" viewBox="0 0 50 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path>
    <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path>
    </svg>
    <p>WATCH TRAILER</p>
    </button>
    </div>
  </div>`;
};
const renderFilmDescription = { renderDescription };
export default renderFilmDescription;
