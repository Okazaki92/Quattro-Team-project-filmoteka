import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";
import { getFromQueued, getFromWatched } from "./local-storage";
import { renderLibraryMovies } from "./render-library-movies";

const paginationDOM = document.querySelector("#pagination");

export const setPaginationWatched = () => {
  try {
    const data = getFromWatched(1);
    const totalItems = JSON.parse(localStorage.getItem("watched")).length;
    const options = {
      totalItems: totalItems,
      itemsPerPage: 15,
      visiblePages: 5,
      page: 1,
      centerAlign: true,
    };
    const pagination = new Pagination(paginationDOM, options);

    pagination.on("beforeMove", (event) => {
      const newPageData = getFromWatched(event.page);
      renderLibraryMovies(newPageData);
    });
  } catch (error) {
    console.log(error);
  }
};

export const setPaginationQueued = () => {
  try {
    const data = getFromQueued(1);
    const totalItems = JSON.parse(localStorage.getItem("queue")).length;
    const options = {
      totalItems: totalItems,
      itemsPerPage: 15,
      visiblePages: 5,
      page: 1,
      centerAlign: true,
    };
    const pagination = new Pagination(paginationDOM, options);

    pagination.on("beforeMove", (event) => {
      const newPageData = getFromQueued(event.page);
      renderLibraryMovies(newPageData);
    });
  } catch (error) {
    console.log(error);
  }
};
