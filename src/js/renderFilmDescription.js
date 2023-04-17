const renderDescription = (movie) => {
	const genre = movie.genres.map(({ name }) => name).join(", ");
	return `
            <img class="modal__image" src=https://image.tmdb.org/t/p/original${
							movie.poster_path
						} alt="${movie.title || movie.name}">
            <div class="modal__textbox">
    <h2 class="modal__header">${movie.title || movie.name}</h2>
    <div class="modal__features">
      <div class="modal__features--keys">
        <p>Vote / Votes</p>
        <p>Popularity</p>
        <p>Original Title</p>
        <p>Genre</p>
      </div>
      <div class="modal__features--values">
        <p><span>${movie.vote_average}</span> / ${movie.vote_count}</p>
        <p>${movie.popularity}</p>
        <p>${movie.original_title || movie.original_name}</p>
        <p>${genre}</p>
      </div>
    </div>
    <div class="modal__description-container">
      <h3 class="modal__description-heading">ABOUT</h3>
      <p class="modal__description-text">${movie.overview}</p>
    </div>
  </div>`;
};
const renderFilmDescription = { renderDescription };
export default renderFilmDescription;
