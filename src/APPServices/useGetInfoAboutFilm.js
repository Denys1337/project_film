import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetInfoAboutFilm = (id) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchInfoFilm(id)
    },[]);

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';

    async function fetchInfoFilm(id) {
     axios.get(`movie/${id}?api_key=${API_KEY}`).then((result) => {
         setPosts(result.data);
         
     })
    }
    
       
  
    return posts
};

export default useGetInfoAboutFilm;

