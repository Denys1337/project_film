import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';


export const fetchInfoFilm = async (id) => {
    try {
        const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log('🚀 ~ error', error);
    }
};

export const fetchCredits = async (id) => {
    try {
        const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
        return response.data.cast;
    } catch (error) {
        console.log('🚀 ~ error', error);
    }
};
export const fetchSearchMovies = async (query) => {
    try {
        const response = await axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.log('🚀 ~ error', error);
    }
};
export const fetchFilm = async () => {
    try {
        const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.log('🚀 ~ error', error);
    }
};
export const fetchOneMoviesDetails = async (id) => {
    try {
        const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.log('🚀 ~ error', error);
    }
};
export const fetchTopFilm = async (currentPage) => {
    try {
        const response = await axios.get(`/movie/top_rated?api_key=${API_KEY}&page=${currentPage}`);
        
        return response.data.results;
    } catch (error) {
        console.log('🚀 ~ error', error);
    }
};
export const fetchVideo = async (id) => {
    try {
        const response = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}`);
        return response.data.results;
    } catch (error) {
        console.log('🚀 ~ error', error);
    }
};











