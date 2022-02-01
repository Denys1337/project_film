import React from "react";
import { useNavigate } from "react-router-dom";
import './Filmlist.modules.css';

function FilmInfo({post}){
    
    const BASE_URL ="https://image.tmdb.org/t/p/w500/"
    const {first_air_date, original_title,original_name,id, release_date, poster_path } = post;
    const router =useNavigate();
    return (
       
            <div>
               
            <div className="list__item" key={id}>
                <div className="list__img">
                    <img src={BASE_URL + poster_path} onClick={()=>router(`/filmitem/${id}`)} />
                </div>    
                    <h2>{original_title||original_name}</h2>
                 <div>
                     <p>{release_date||first_air_date}</p>
                 </div>
               
            </div>
           
            </div>
            
            
    
       
    )
}

export default FilmInfo