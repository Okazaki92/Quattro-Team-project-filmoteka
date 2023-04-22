import { Loading } from "notiflix";
import api from "./api";
import axios from "axios";

axios.defaults.baseURL = api.BASE_URL;

const searchMovies = async (page, query) => {
	try {
		Loading.pulse({
			svgColor: "red",
			svgSize: "200px",
		});
		const response = await axios.get("/search/movie", {
			params: {
				api_key: api.API_KEY,
				query: `${query}`,
				page: `${page}`,
			},
		});
		Loading.remove();
		const data = response.data;
		return data;
	} catch (error) {
		console.log(error);
	}
};
export default searchMovies;
