import React, { useEffect } from "react";
import { useState } from "react";
import { fetchFilm, fetchInfoFilm } from "../../../AppServices/Services";
import s from "./Random.module.scss";
import {BASE_URL} from "../../../constant/constant";

const Random = () =>  {
 
  const [random, setRandom] = useState(1);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetchFilm();
      setFilms(res);

    }
    fetchData();
  }, []);

  let arr = [];
  if (films) {
    arr = films.map(film => film.id);

  }
  const firstFilm = films[0];
  const [film, setFilm] = useState(firstFilm);
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetchInfoFilm(arr[random]);
      setFilm(res);
     
    }
    fetchData();
  },[arr[random]]);
  const posterUrl = film?.poster_path;
  const posterTiltle = film?.original_title;
  let posterData = film?.release_date.split("-").slice(0,1).join("");

  const posterGenres = film?.genres;

  const newArr = [];
  if (posterGenres) {
    newArr.push(posterGenres.map(item => item.name));
  }

  const GENERES = newArr[0];

  return <div className={s.random}>
    <div className={s.random__title}>
       {posterUrl ? <img src={BASE_URL + posterUrl} alt={"myProj"}/> : <h3>No Photo</h3>}
       <p>{posterTiltle} {posterData}</p>
    </div>
    <ul>
      {GENERES !== []
      ?
      GENERES?.map((number,i)=>
      <li key={i}>{number}</li>)
    :
    <h4>No information</h4>}
    </ul>
   
    <button onClick={() =>setRandom(Math.floor(Math.random() * arr.length))}>Randomize</button>
  </div>;
};

export default React.memo(Random);
