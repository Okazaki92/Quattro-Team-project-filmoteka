import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";
import { getFromQueued, getFromWatched } from "./localStorage";
import { renderWatchedMovies } from "./renderLibraryMovies";

const paginationDOM = document.querySelector("#pagination");
export const setPaginationWatched = (event) => {
	try {
		const data = getFromWatched();
		console.log(data.length);
		const options = {
			totalItems: data.length,
			itemsPerPage: 20,
			visiblePages: 5,
			page: 1,
			centerAlign: true,
		};
		const pagination = new Pagination(paginationDOM, options);

		pagination.on("beforeMove", (event) => {
			const newPageData = getFromWatched(event);
			console.log(newPageData);
			renderWatchedMovies(newPageData);
		});
	} catch (error) {
		console.log(error);
	}
};
export const setPaginationQueued = (event) => {
	try {
		const data = getFromQueued();
		console.log(data.length);
		const options = {
			totalItems: data.length,
			itemsPerPage: 20,
			visiblePages: 5,
			page: 1,
			centerAlign: true,
		};
		const pagination = new Pagination(paginationDOM, options);

		pagination.on("beforeMove", (event) => {
			const newPageData = getFromQueued(event);
			console.log(newPageData);
			renderWatchedMovies(newPageData);
		});
	} catch (error) {
		console.log(error);
	}
};