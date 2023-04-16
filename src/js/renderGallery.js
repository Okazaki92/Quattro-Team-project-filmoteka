const moviesDOM = document.querySelector(".movies__list");
import getGallery from "./getGallery";
const renderTrendingGallery = async (movies) => {
	let genreNames = [];
	const data = await getGallery.getGalleryGenres();
	const markup = movies
		.map((movie) => {
			const {
				title,
				poster_path,
				release_date,
				first_air_date,
				name,
				vote_average,
				genre_ids,
				id,
			} = movie;
			if (genre_ids) {
				genreNames = data
					.filter(({ id }) => genre_ids.includes(id))
					.map(({ name }) => name)
					.join(", ");
			}
			return `
            <li class="movie" data-id=${id}>
            <img class="movie__image" src=https://image.tmdb.org/t/p/original${poster_path} alt="${title || name}" loading="lazy">
            <div class="movie__textbox">
          <h3 class="movie__title">${title || name}</h3>
          <div class="movie__subtitle">
          <p class="movie__genre">${genreNames}</p>
          <p class="movie__date">${(release_date || first_air_date).slice(0, 4)}</p>
          <p class="movie__rating">${vote_average.toFixed(2) || "-"}</p>
          </div>
        </div>
            </li>`;
		})
		.join("");
	moviesDOM.insertAdjacentHTML("beforeend", markup);
};

const onSubmit = async (event) => {
	try {
		const data = await getGallery.getTrendingGallery();
		trendingGallery.renderTrendingGallery(data.results);
	} catch (error) {
		console.log(error);
	}
};
onSubmit();

const trendingGallery = { renderTrendingGallery };
export default trendingGallery;
