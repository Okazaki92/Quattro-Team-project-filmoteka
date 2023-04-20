import getGallery from "./getGallery";
import tredingGallery from "./renderGallery";
import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";

const paginationDOM = document.querySelector("#pagination");

const setPagination = (totalItems) => {
	const options = {
		totalItems,
		itemsPerPage: 10,
		visiblePages: 5,
		centerAlign: true,
	};

	const pagination = new Pagination(paginationDOM, options);

	return pagination;
};

const getPagination = async () => {
	try {
		const data = await getGallery.getTrendingGallery(1);
		const pagination = setPagination(data.totalItems);

		pagination.on("beforeMove", ({ page }) => {
			tredingGallery.renderTrendingGallery(page);
		});
	} catch (error) {
		console.error(error);
	}
};

export default getPagination;
