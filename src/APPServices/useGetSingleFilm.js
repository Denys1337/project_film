import React, { useState } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';



const useGetSingleFilm = () => {
    const params = useParams();
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';
    const [film,setFilm]=useState(()=>fetchSearchMoviesDetails(params.id));
    
  
    async function fetchSearchMoviesDetails (movieId) {
      try {
        const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
        setFilm(response.data);
        return response.data;
  
      } 
      catch (error) {
        console.log('🚀 ~ error', error);
      }
    };
    return film
};

export default useGetSingleFilm;
