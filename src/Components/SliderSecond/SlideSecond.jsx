import React from 'react';
import s from './SliderSecond.module.scss';


const SlideSecond = ({ post }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/"
  const {  poster_path,original_title,overview,release_date,id} = post;
 const realese = release_date.split('-').slice(0,1).join('');
 console.log(post);
  return <div className={s.slide}>
            <div className={s.slide__leftSide}>
             <div className={s.slide__topInfo}>
                <img src={BASE_URL + poster_path} />
               <div>
                 <h2>{original_title}</h2>
                 <div className={s.slide__infoList}>
                   <ul className={s.slide__titleList}>
                     <li>year</li>
                     <li>country</li>
                     <li>director</li>
                     <li>genres</li>
                     <li>budget</li>
                     <li>duration</li>
                   </ul>
                   <ul className={s.slide__meanList}>
                     <li>{realese}</li>
                     <li>{id}</li>
                     <li></li>
                     <li></li>
                     <li></li>
                     <li></li>
                   </ul>
                 </div>
               </div>
             </div>
              <div>{overview}</div>
              <div></div>
            </div>
            <div>ewefwefew</div>
        </div>
};

export default SlideSecond;
