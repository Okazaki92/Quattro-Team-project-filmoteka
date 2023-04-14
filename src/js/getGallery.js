import axios from "axios";
import api from "./api";
import { Loading } from "notiflix/build/notiflix-loading-aio";
axios.defaults.baseURL = api.BASE_URL;
const btn = document.querySelector(".btn");

const getTrendingGallery = async () => {
	try {
		Loading.pulse({
			svgColor: "red",
			svgSize: "100px",
		});
		const response = await axios.get("trending/movie/day", {
			params: {
				api_key: api.API_KEY,
			},
		});
		console.log(response);
		Loading.remove();
		const data = response.data;
		console.log(data.results);
		return data;
	} catch (error) {
		console.log(error);
	}
};

const Click = (event) => {
	event.preventDefault();
	getTrendingGallery();
};
btn.addEventListener("click", Click);

const getGallery = { getTrendingGallery };
export default getGallery;
