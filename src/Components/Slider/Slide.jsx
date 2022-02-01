import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Slider.module.scss';


const Slide = ({ post }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/"
  const router = useNavigate();
  const { id, poster_path } = post;

  return <div className={s.slide}>
             <img src={BASE_URL + poster_path} onClick={() => router(`/filmitem/${id}`)} />
             <div className={s.descr}>
                 <div className={s.info}><p>Information</p></div>
                 <div className={s.watch}><p>Add to watch list</p></div>
              </div>
        </div>
};

export default Slide;
