import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";
import { getFromQueued, getFromWatched } from "./localStorage";
import { renderLibraryMovies } from "./renderLibraryMovies";

const paginationDOM = document.querySelector("#pagination");
export const setPaginationWatched = (event) => {
  try {
    const data = getFromWatched(1);
    console.log(data.length);
    const options = {
      totalItems: data.length,
      itemsPerPage: 3,
      visiblePages: 5,
      page: 1,
      centerAlign: true,
    };
    const pagination = new Pagination(paginationDOM, options);

    pagination.on("beforeMove", (event) => {
      const newPageData = getFromWatched(event.page);
      console.log(newPageData);
      renderLibraryMovies(newPageData);
    });
  } catch (error) {
    console.log(error);
  }
};
export const setPaginationQueued = (event) => {
  try {
    const data = getFromQueued(1);
    console.log(data.length);
    const options = {
      totalItems: data.length,
      itemsPerPage: 3,
      visiblePages: 5,
      page: 1,
      centerAlign: true,
    };
    const pagination = new Pagination(paginationDOM, options);

    pagination.on("beforeMove", (event) => {
      const newPageData = getFromQueued(event.page);
      console.log(newPageData);
      renderLibraryMovies(newPageData);
    });
  } catch (error) {
    console.log(error);
  }
};
