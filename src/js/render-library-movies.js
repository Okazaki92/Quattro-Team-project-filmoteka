import { setPaginationWatched, setPaginationQueued } from './pagination-library';
import { getFromQueued, getFromWatched } from './local-storage';
import getGallery from './get-gallery';
const moviesDOM = document.querySelector('.movies__list');
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const IMG_URL_RETINA = 'https://image.tmdb.org/t/p/original';
const IMG_URL_DEFAULT = 'https://i.ibb.co/xq4LQMw/Filmoteka-by-Quattro.jpg';
const NO_MOVIES_MEME = 'https://i.imgflip.com/7kk9al.jpg';
const paginationDOM = document.querySelector('#pagination');

export const submitWatched = event => {
  try {
    const data = getFromWatched(1);
    console.log(data);
    if (data.length === 0) {
      moviesDOM.innerHTML = `<img class='movie__library' src='${NO_MOVIES_MEME}' alt='Boromir meme'>`;
      paginationDOM.innerHTML = '';
    } else {
      renderLibraryMovies(data);
      setPaginationWatched();
    }
  } catch (error) {
    console.log(error);
  }
};

export const submitQueued = event => {
  try {
    const data = getFromQueued(1);
    if (data.length === 0) {
      moviesDOM.innerHTML = `<img class='movie__library' src='${NO_MOVIES_MEME}' alt='Boromir meme'>`;
      paginationDOM.innerHTML = '';
    } else {
      renderLibraryMovies(data);
      setPaginationQueued();
    }
  } catch (error) {
    console.log(error);
  }
};

export const renderLibraryMovies = async movies => {
  let genreNames = [];
  const genres = await getGallery.getGalleryGenres();
  const markup = movies
    .map(
      ({ title, poster_path, release_date, first_air_date, name, vote_average, genre_ids, id }) => {
        if (genre_ids) {
          genreNames = genres
            .filter(({ id }) => genre_ids.includes(id))
            .map(({ name }) => name)
            .join(', ');
        }
        return `
            <li class="movie" data-id=${id}>
            <img class="movie__image" srcset="
            ${poster_path ? IMG_URL + poster_path : IMG_URL_DEFAULT} 1x, 
            ${poster_path ? IMG_URL_RETINA + poster_path : IMG_URL_DEFAULT} 2x"
            alt="${title || name}" loading="lazy">
            <div class="movie__textbox">
          <h3 class="movie__title">${title || name}</h3>
          <div class="movie__subtitle">
          <span class="movie__genre">${genreNames}</span>
          <span class="movie__date">| ${(release_date || first_air_date)?.slice(0, 4) || '-'}</span>
          <span class="movie__rating">| ${vote_average.toFixed(1) || '-'}</span>
          </div>
        </div>
            </li>`;
      },
    )
    .join('');
  moviesDOM.innerHTML = '';
  moviesDOM.insertAdjacentHTML('beforeend', markup);
};
