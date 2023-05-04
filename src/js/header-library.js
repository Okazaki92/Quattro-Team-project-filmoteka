import {
	setPaginationQueued,
	setPaginationWatched,
} from "./pagination-library";
import { submitQueued, submitWatched } from "./render-library-movies";

const btnLibrary = document.querySelector(".btn-library");

const btnWatched = document.querySelector("#btnWatched");
const btnQueue = document.querySelector("#btnQueue");

const toggleBtnActive = (e) => {
	const clickedBtn = e.target;

	if (!clickedBtn.classList.contains("btn-current-active")) {
		btnWatched.classList.toggle("btn-current-active");
		btnQueue.classList.toggle("btn-current-active");
	}

	if (clickedBtn.classList.contains("btn-current-inactive")) {
		btnWatched.classList.toggle("btn-current-inactive");
		btnQueue.classList.toggle("btn-current-inactive");
	}
	if (btnWatched.classList.contains("btn-current-active")) {
		submitWatched();
		setPaginationWatched();
	} else {
		submitQueued();
		setPaginationQueued();
	}
};

btnWatched.addEventListener("click", toggleBtnActive);
btnQueue.addEventListener("click", toggleBtnActive);

submitWatched();
