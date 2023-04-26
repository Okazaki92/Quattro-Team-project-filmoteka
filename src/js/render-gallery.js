const moviesDOM = document.querySelector('.movies__list');
const IMG_URL = 'https://image.tmdb.org/t/p/original';
const IMG_URL_DEFAULT = 'https://i.ibb.co/xq4LQMw/Filmoteka-by-Quattro.jpg';
import setPagination from './pagination';
import getGallery from './get-gallery';

const renderTrendingGallery = async movies => {
  moviesDOM.innerHTML = '';
  let genreNames = [];
  const data = await getGallery.getGalleryGenres();
  const markup = movies
    .map(
      ({ title, poster_path, release_date, first_air_date, name, vote_average, genre_ids, id }) => {
        if (genre_ids) {
          genreNames = data
            .filter(({ id }) => genre_ids.includes(id))
            .map(({ name }) => name)
            .join(', ');
        }
        return `
            <li class="movie" data-id=${id}>
            <img class="movie__image" src="${
              poster_path ? IMG_URL + poster_path : IMG_URL_DEFAULT
            }" alt="${title || name}" loading="lazy">
            <div class="movie__textbox">
          <h3 class="movie__title">${title || name}</h3>
          <div class="movie__subtitle">
          <span class="movie__genre">${genreNames}</span>
          <span class="movie__date">| ${(release_date || first_air_date)?.slice(0, 4) || '-'}</span>
          <span class="movie__rating">| ${vote_average.toFixed(1) || '-'}</span>
          </div>
        </div>
            </li>
			`;
      },
    )
    .join('');
  moviesDOM.insertAdjacentHTML('beforeend', markup);
};

const onSubmit = async event => {
  try {
    const data = await getGallery.getTrendingGallery();

    renderTrendingGallery(data.results);
  } catch (error) {
    console.log(error);
  }
};
onSubmit();
setPagination();

const tredingGallery = { renderTrendingGallery };
export default tredingGallery;
