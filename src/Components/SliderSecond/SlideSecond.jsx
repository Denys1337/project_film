import React from 'react';
import { useEffect } from 'react';
import useGetInfoAboutFilm from '../../APPServices/useGetInfoAboutFilm';
import useGetVideo from '../../APPServices/useGetVideo';
import s from './SliderSecond.module.scss';



const SlideSecond = ({ post }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const {  poster_path,original_title,overview,release_date,id} = post;
  const realese = release_date.split('-').slice(0,1).join('');
  const video = useGetVideo(id);
  const oneVideo = video[1];
  const INFO_FILM = useGetInfoAboutFilm(id);
  const {budget,runtime,genres,production_countries} = INFO_FILM;
  const newArr=[];
  if(genres){
    newArr.push(genres.map(item => item.name))
  }

  const PROD_COUNTRY = []
  if(production_countries){
    PROD_COUNTRY.push(production_countries.map(item => item.iso_3166_1))
  }
  

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
                     <li>{PROD_COUNTRY.join(' ')}</li>
                     <li>Paul Greengrass</li>
                     <li>{newArr.splice(0,4).join(', ')}</li>
                     <li>{budget}$</li>
                     <li>{runtime} min</li>
                   </ul>
                 </div>
               </div>
             </div>
              <div>{overview}</div>          
            </div>
         
            {oneVideo !== undefined
              ?
              <iframe width="835"   src={`https://www.youtube.com/embed/${oneVideo.key}`}  title="YouTube video player"  >

              </iframe>
              :
              <h1>Sorry, this video is not found</h1>
              }
        </div>
};

export default SlideSecond;
