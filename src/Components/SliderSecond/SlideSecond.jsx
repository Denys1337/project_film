import React, { useEffect, useState } from "react";
import { fetchInfoFilm, fetchVideo} from "../../AppServices/Services";
import s from "./SliderSecond.module.scss";
import {BASE_URL} from "../../constant/constant";

const SlideSecond = ({post,isActive}) => {

  const { poster_path, original_title, overview, release_date, id } = post;
  const realese = release_date.split("-").slice(0, 1).join("");
  const [video, setVideo] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetchVideo(id);  
      setVideo(res);
    }
    fetchData();
  }, [id]);
  const oneVideo = video[1];
  const [info, setInfo] = useState();
  useEffect(() => {
    async function fetchData() {
      const res = await fetchInfoFilm(id);
      setInfo(res);
    }
    fetchData();
  }, [id]);
  const { budget, runtime, genres, production_countries } = info || {};


  const newArr = [];
  if (genres) {
    newArr.push(genres.map(item => item.name));
  }

  const PROD_COUNTRY = [];
  if (production_countries) {
    PROD_COUNTRY.push(production_countries.map(item => item.iso_3166_1));
  }


  return <div className={s.slide}>
    <div className={s.slide__leftSide}>
      <div className={s.slide__topInfo}>
        <img src={BASE_URL + poster_path} alt={"myProj"}/>
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
              <li>{PROD_COUNTRY.join(" ")}</li>
              <li>Paul Greengrass</li>
              <li>{newArr.splice(0, 4).join(", ")}</li>
              <li>{budget}$</li>
              <li>{runtime} min</li>
            </ul>
          </div>
        </div>
      </div>
      <div>{overview}</div>
    </div>

    {oneVideo !== undefined && isActive === true
      ?
      <iframe width="835" src={`https://www.youtube.com/embed/${oneVideo.key}`} title="YouTube video player"  >

      </iframe>
      :
      <h1>Sorry, this video is not found</h1>
    }
  </div>;
};

export default SlideSecond;
