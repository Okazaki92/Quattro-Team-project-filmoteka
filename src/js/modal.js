import getFilmDescription from "./getFilmDescription";
import renderFilmDescription from "./renderFilmDescription";
const modalDOM = document.querySelector(".modal__window");

const qs = (e) => document.querySelector(e);

const closeBtn = qs("#modal__close");
const imageItem = qs(".movies__list");
const modal = qs(".modal");

const openModal = async (e) => {
	e.preventDefault();
	let movieId = 0;
	if (!e.target.closest("li")) {
		return;
	}
	modal.classList.remove("is-hidden");
	movieId = e.target.closest("li").dataset.id;
	try {
		const data = await getFilmDescription.getMovieDescription(movieId);
		modalDOM.insertAdjacentHTML(
			"beforeend",
			renderFilmDescription.renderDescription(data),
		);
	} catch (error) {
		console.log(error);
	}
};

const closeModal = () => {
	modal.classList.add("is-hidden");
	const modalImg = qs(".modal__image");
	const modalTextbox = qs(".modal__textbox");
	modalTextbox.remove();
	modalImg.remove();
};
closeBtn.addEventListener("click", closeModal);
imageItem.addEventListener("click", openModal);
