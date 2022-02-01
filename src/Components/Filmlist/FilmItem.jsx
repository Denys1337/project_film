import React, { useState } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
function Filmitem(){
   const params = useParams();
   axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';

   const fetchSearchMoviesDetails = async movieId => {
    try {
      const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
      setFilm(response.data);
      return response.data;
    } catch (error) {
      console.log('🚀 ~ error', error);
    }
  };
  const [film,setFilm]=useState(()=>fetchSearchMoviesDetails(params.id));
  const {title,release_date} = film;
   
    return (
        
            <div>
              <h2>Page posts {title}</h2>
              
              <h3>{release_date}</h3>
            </div>
            
    
       
    )
}

export default Filmitem