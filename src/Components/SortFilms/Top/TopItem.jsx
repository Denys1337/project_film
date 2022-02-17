import React from 'react';
import s from './Top.module.scss'

const TopItem = ({top}) => {
    const {title,vote_average,backdrop_path} = top
    const BASE_URL = "https://image.tmdb.org/t/p/w500/";
 console.log(top);
  return <div className={s.topItem}>
      <div className={s.topItem__leftCont}>
      <img src={BASE_URL + backdrop_path}/>
      <p>{title}</p>
      </div>
      <p>{vote_average}</p>
  </div>;
};

export default TopItem;
