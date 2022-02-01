import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetFilms = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchFilm()
    }, []);

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';

    async function fetchFilm() {
      await axios.get(`trending/movie/week?api_key=${API_KEY}`)
            .then(res => setPosts(res.data.results))
    }
    
    
    return posts
};

export default useGetFilms;
