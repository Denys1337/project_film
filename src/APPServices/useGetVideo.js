import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetVideo = (id) => {

    const [video, setVideo] = useState([])

    useEffect(() => {
        fetchVideo(id)
    },[]);

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';

    async function fetchVideo(id) {
     axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((result) => {
         setVideo(result.data.results);
         
     })
    }
       
 
    return video
};

export default useGetVideo;

