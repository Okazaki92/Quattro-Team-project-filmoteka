const films = document.querySelector(".films");
import getGallery from "./getGallery";
let genreNames = [];
const renderTrendingGallery = async (movies) => {
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
					.map(({ name }) => name);
			}
			return `<li class="films__item" data-id=${id}>
			        <div class="films__img">
			        <img src=https://image.tmdb.org/t/p/original${poster_path} alt="${title || name}" loading="lazy">
			</div>
			        <div class="films__description">
			          <p class="films__title">${title || name}</p>
			          <p class="films__genre">${genreNames}</p>
                      <p class="films__date">${(
												release_date || first_air_date
											).slice(0, 4)}</p>
                      <p class="films__rating">${vote_average.toFixed(2) || "-"}</p>
			        </div>
			    </li>`;
		})
		.join("");
	films.insertAdjacentHTML("beforeend", markup);
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
