import React from "react";
import FilmInfo from "./FilmInfo";

function Filmlist({posts}){
  
   
    return (
        
            <div className="list">
            {posts.map((post) =>
                <FilmInfo post={post} key={post.id} />
      )}
            </div>
            
    
       
    )
}

export default Filmlist