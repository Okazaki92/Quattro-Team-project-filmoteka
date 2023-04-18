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
        <p class="modal__feature">Vote / Votes</p>
        <p class="modal__feature">Popularity</p>
        <p class="modal__feature">Original Title</p>
        <p class="modal__feature">Genre</p>
      </div>
      <div class="modal__features--values">
      <p class="modal__feature"><button>${movie.vote_average.toFixed(2)}</button> / ${movie.vote_count}</p>
        <p class="modal__feature">${movie.popularity}</p>
        <p class="modal__feature">${movie.original_title || movie.original_name}</p>
        <p class="modal__feature">${genre}</p>
      </div>
    </div>
    <div class="modal__description-container">
      <h3 class="modal__description-heading">ABOUT</h3>
      <p class="modal__description-text">${movie.overview}</p>
    </div>
    <div class="modal__buttons">
        <button class="modal__buttons--watched">ADD TO WATCHED</button
        ><button class="modal__buttons--queue">ADD TO QUEUE</button>
      </div>
  </div>`;
};
const renderFilmDescription = { renderDescription };
export default renderFilmDescription;
