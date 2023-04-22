import api from "./api";
import axios from "axios";
import tredingGallery from "./renderGallery";
import searchMovies from "./getSearchedMovies";
import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";
axios.defaults.baseURL = api.BASE_URL;

const searchForm = document.querySelector("#formSearch");
const inputDOM = document.querySelector(".form__search--input");
const moviesList = document.querySelector(".movies__list");
const paginationDOM = document.querySelector("#pagination");

let query = "";
const page = 1;
searchForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	query = inputDOM.value;
	try {
		const data = await searchMovies(page, query);
		const searchedMovies = await data.results;
		console.log(searchedMovies);
		const totalMovies = await data.total_results;
		const options = {
			totalItems: data.total_results,
			itemsPerPage: 20,
			visiblePages: 5,
			page: 1,
			centerAlign: true,
		};
		const pagination = new Pagination(paginationDOM, options);

		if (totalMovies !== 0) {
			tredingGallery.renderTrendingGallery(searchedMovies);
			pagination.on("beforeMove", async (event) => {
				const newPageData = await searchMovies(event.page, query);
				tredingGallery.renderTrendingGallery(newPageData.results);
			});
		} else {
			moviesList.innerHTML = `
			<div class="mx-auto">
			<p class="movie__title">Sorry, we don't have any movie with<span class="movie__subtitle"> ${query}</span></p>
			</div>`;
		}
	} catch (error) {
		console.error(error);
	}
});
