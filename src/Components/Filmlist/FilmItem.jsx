import { Carousel } from "@trendyol-js/react-carousel";
import React, {useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCredits, fetchOneMoviesDetails } from "../../AppServices/Services";
import s from "./FilmItem.module.scss";
import SlideCredits from "./SlideCredits";
import {BASE_URL} from "../../constant/constant";


const  Filmitem = () => {

  const params = useParams();
  const [single, setSingle] = useState();
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetchOneMoviesDetails(params.id);
      setSingle(res);
    }
    fetchData();
  }, [params.id]);
  const { runtime, title, status, overview, budget, release_date,  backdrop_path, vote_average, popularity } = single || {};

 
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchCredits(params.id);
      setCredits(res);
    }
    fetchData();
  }, [params.id]);

  return (

    <div className={s.FilmItem}>
      <div className={s.FilmItem__header}>
        <h2> {title}</h2>
        <div className={s.FilmItem__rightInfo}>
          <div>
            <h3>IMDB RATING</h3>
            <div className={s.FilmItem__rating}>
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt={"myProj"}/>
              <h4>{vote_average}</h4>
            </div>
          </div>
          <div>
            <h3>POPULARITY</h3>
            <h4>{popularity}</h4>
          </div>
        </div>
      </div>
      <div className={s.FilmItem__info}>
        {backdrop_path
          ?
          <img src={BASE_URL + backdrop_path} alt={"myProj"}/>
          :
          <h2>No Photo</h2>
        }
        <ul>
          <li><span>Release date:</span> {release_date}</li>
          <li><span>Runtime : </span> {runtime}m  </li>
          <li><span>Status:</span> {status}</li>
          <li><span>Budget:</span> {budget}$</li>
          <li><span>Overview: </span>{overview}</li>
        </ul>

      </div>
      <p>Casts</p>
      {credits
        ?
        <Carousel
          show={8}
          slide={3}
          transition={0.5}
          swiping={true}
          responsive={true}
        >

          {credits.map((credit, i) => <SlideCredits credit={credit} key={i} />)}
        </Carousel>
        : <h1>Hello</h1>
      }

    </div>



  );
};

export default Filmitem;