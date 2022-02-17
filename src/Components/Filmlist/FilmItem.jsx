import React, { useEffect } from "react";
import useGetSingleFilm from "../../APPServices/useGetSingleFilm";

function Filmitem(){
  const film = useGetSingleFilm()
  const {title,release_date,id} = film;
  
    return (
        
            <div>
              <h2>Page posts {title}</h2>
              
              <h3>{release_date}</h3>
              <h4>{id}</h4>
            </div>
            

       
    )
}

export default Filmitem