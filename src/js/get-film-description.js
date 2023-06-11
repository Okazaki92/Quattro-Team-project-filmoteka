import { Loading } from 'notiflix/build/notiflix-loading-aio';
import api from './api';
import axios from 'axios';
axios.defaults.baseURL = api.BASE_URL;

const getMovieDescription = async movieId => {
  try {
    Loading.pulse({
      svgColor: 'red',
      svgSize: '100px',
    });
    const response = await axios.get(`movie/${movieId}`, {
      params: {
        api_key: api.API_KEY,
      },
    });
    const responseVideo = await axios.get(`movie/${movieId}/videos`, {
      params: {
        api_key: api.API_KEY,
      },
    });
    Loading.remove();
    const data = response.data;
    const dataVideo = responseVideo.data.results[0];
    const fullData = {
      responseData: data,
      responseVideoData: dataVideo,
    };
    return fullData;
  } catch (error) {
    console.log(error);
  }
};
const getFilmDescription = { getMovieDescription};
export default getFilmDescription;
