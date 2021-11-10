import axios from "axios";
export default function ApiSettings(searchMovie) {
    const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
    const KEY = 'e1f4818a0d3fba42c34b00359742bede';
    return axios.get(`${BASE_URL}api_key=${KEY}&query=${searchMovie}&language=en-US`)
}