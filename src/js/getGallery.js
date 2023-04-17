import axios from "axios";
import api from "./api";
import { Loading } from "notiflix/build/notiflix-loading-aio";
axios.defaults.baseURL = api.BASE_URL;

const getTrendingGallery = async () => {
	try {
		Loading.pulse({
			svgColor: "red",
			svgSize: "200px",
		});
		const response = await axios.get("trending/movie/day", {
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

const getGalleryGenres = async () => {
	try {
		const response = await axios.get("genre/movie/list", {
			params: {
				api_key: api.API_KEY,
			},
		});
		const data = response.data;
		return data.genres;
	} catch (error) {
		console.log(error);
	}
};

const getGallery = { getTrendingGallery, getGalleryGenres };
export default getGallery;
