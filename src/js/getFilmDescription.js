import { Loading } from "notiflix/build/notiflix-loading-aio";
import api from "./api";
import axios from "axios";
axios.defaults.baseURL = api.BASE_URL;

const getMovieDescription = async (movieId) => {
	try {
		Loading.pulse({
			svgColor: "red",
			svgSize: "100px",
		});
		const response = await axios.get(`movie/${movieId}`, {
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

const getFilmDescription = { getMovieDescription };
export default getFilmDescription;
