import React from 'react';
import s from './WallPapers.module.scss'

const WallPapers = ({post}) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
 const {poster_path,original_title} = post
 
  return <div className={s.postersSection}>
    
     <div className={s.posters}>
      <img src={BASE_URL+poster_path }/>
      <p>{original_title}</p>
     </div>
     
  </div>;
};

export default WallPapers;
