import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetTopFilm = () => {

    const [film, setFilm] = useState([])
  

    useEffect(() => {
        fetchTopFilm()
    },[]);

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';

    async function fetchTopFilm() {
     axios.get(`/movie/top_rated?api_key=${API_KEY}&page=1`).then((result) => {
         setFilm(result.data.results);
         
     })
    }
    
      
  
    return film
};

export default useGetTopFilm;

