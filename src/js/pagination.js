import getGallery from "./getGallery";
import tredingGallery from "./renderGallery";
import Pagination from "tui-pagination";
import "tui-pagination/dist/tui-pagination.css";

const paginationDOM = document.querySelector("#pagination");
const page = 1;
const setPagination = async (event) => {
	try {
		const data = await getGallery.getTrendingGallery(page);
		const options = {
			totalItems: data.total_results,
			itemsPerPage: 20,
			visiblePages: 5,
			page: 1,
			centerAlign: true,
		};

		const pagination = new Pagination(paginationDOM, options);

		pagination.on("beforeMove", async (event) => {
			const newPageData = await getGallery.getTrendingGallery(event.page);
			tredingGallery.renderTrendingGallery(newPageData.results);
		});
	} catch (error) {
		console.log(error);
	}
};
export default setPagination;
