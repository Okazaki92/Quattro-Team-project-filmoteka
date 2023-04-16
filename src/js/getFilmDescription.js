const modalDOM = document.querySelector(".container modal");
const movieDOM = document.querySelector(".movie");
const buton = document.querySelector(".test");
import getGallery from "./getGallery";
const getMovieDescription = async () => {
	try {
		Loading.pulse({
			svgColor: "red",
			svgSize: "100px",
		});
		const response = await axios.get(`movie/${movieId}`, {
			params: {
				api_key: api.API_KEY,
			},
		});
		Loading.remove();
		const data = response.data;
		return data;
	} catch (error) {
		console.log(error);
	}
};
const test = async (event) => {
	console.log(event.target.closest("li"));
};
document.addEventListener("click", test);
// const renderDescription = async (movies) => {
// 	let genreNames = [];
// 	const data = await getGallery.getGalleryGenres();
// 	const markup = movies
// 		.map((movie) => {
// 			const {
// 				poster_path,
// 				title,
// 				name,
// 				original_name,
// 				original_title,
// 				vote_average,
// 				vote_count,
// 				genre_ids,
// 				overview,
// 				popularity,
// 				id,
// 			} = movie;
// 			if (genre_ids) {
// 				genreNames = data
// 					.filter(({ id }) => genre_ids.includes(id))
// 					.map(({ name }) => name)
// 					.join(", ");
// 			}
// 			return `<img class="modal__image" src=https://image.tmdb.org/t/p/original${poster_path} alt="${title || name}">
//             <div class="modal__textbox">
//     <h2 class="modal__header">${title || name}</h2>
//     <div class="modal__features">
//       <div class="modal__features--keys">
//         <p>Vote / Votes</p>
//         <p>Popularity</p>
//         <p>Original Title</p>
//         <p>Genre</p>
//       </div>
//       <div class="modal__features--values">
//         <p><span>${vote_average}</span> / ${vote_count}</p>
//         <p>${popularity}</p>
//         <p>${original_title || original_name}</p>
//         <p>${genreNames}</p>
//       </div>
//     </div>
//     <div class="modal__description-container">
//       <h3 class="modal__description-heading">ABOUT</h3>
//       <p class="modal__description-text">${overview}</p>
//     </div>
//   </div>`;
// 		})
// 		.join("");
// 	modalDOM.insertAdjacentHTML("beforeend", markup);
// };

// const submitRender = async (event) => {
// 	try {
// 		const data = await getGallery.getTrendingGallery();
// 		console.log(data);
// 		renderDescription(data.results);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
// movieDOM.addEventListener("click", submitRender);

// const getFilmDescription = { renderDescription };
// export default getFilmDescription;
