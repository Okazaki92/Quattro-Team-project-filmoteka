import api from "./api";
import axios from "axios";
axios.defaults.baseURL = api.BASE_URL;

const searchForm = document.querySelector("#form__search");
const inputDOM = document.querySelector(".form__search--input")

const searchParams = {
    api_key: api.API_KEY,
    query: '',
    page: 1,
    per_page: 40,
}

searchForm.addEventListener("submit", async event => {
    event.preventDefault();

    const textInput = inputDOM.value;
    searchParams.query = textInput

    page = 1;

    try {
        const response = await axios.get("/search/movie", {
            params: searchParams,
        })
        console.log(response)
    } catch (error) {
     console.log(error);
    }
});
