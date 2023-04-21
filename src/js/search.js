import api from "./api";
import axios from "axios";
import tredingGallery from "./renderGallery";
axios.defaults.baseURL = api.BASE_URL;

const searchForm = document.querySelector("#formSearch");
const inputDOM = document.querySelector(".form__search--input")
const moviesList = document.querySelector(".movies__list");

const searchParams = {
    api_key: api.API_KEY,
    query: '',
    page: 1,
}

searchForm.addEventListener("submit", async event => {
    event.preventDefault();
    
    const textInput = inputDOM.value;
    searchParams.query = textInput
    
    try {
        const response = await axios.get("/search/movie", {
            params: searchParams,
        })
        
        const searchedMovies = await response.data.results
        const totalMovies = await response.data.total_results

        if (totalMovies !== 0) {
            tredingGallery.renderTrendingGallery(searchedMovies)
        } else {
            moviesList.innerHTML = `
                <div class="mx-auto">
                    <p class="movie__title">Sorry, we don't have any movie with<span class="movie__subtitle"> ${textInput}</span></p>
                </div>`
        }
    } catch (error) {
        console.error(error)
    }
});
