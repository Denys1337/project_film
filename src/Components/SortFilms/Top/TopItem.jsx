import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Top.module.scss'

const TopItem = ({top}) => {
    const {title,vote_average,backdrop_path,id} = top
    const BASE_URL = "https://image.tmdb.org/t/p/w500/";
    const router = useNavigate();
    

  return <li className={s.topItem} onClick={() => router(`/filmitem/${id}`)}>
      
      <div className={s.topItem__leftCont}>
      <img src={BASE_URL + backdrop_path}/>
      <p>{title}</p>
      </div>
      <p>{vote_average}</p>
    </li>
  
  
};

export default TopItem;
