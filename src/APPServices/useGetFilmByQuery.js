import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetFilmByQuery = (query) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchSearchMovies(query)
    },[query]);

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';

     const fetchSearchMovies = async query => {
        try {
          const response = await axios.get(
            `search/movie?query=${query}&api_key=${API_KEY}`,
            
          );
           setPosts(response.data.results);
        } catch (err) {
          console.log('🚀 ~ error', {error: err});
        }
      };
    
  
    return posts
};

export default useGetFilmByQuery;

