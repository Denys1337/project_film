import React, { useEffect } from 'react';
import { useState } from 'react';
import { fetchFilm, fetchInfoFilm } from '../../../APPServices/Services';
import s from './Random.module.scss'

const Random = () =>  {
 
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCP4IH33BQnLWLwwizcsQJyTqktcQ4keIk",
//   authDomain: "filmoteka-48a51.firebaseapp.com",
//   projectId: "filmoteka-48a51",
//   storageBucket: "filmoteka-48a51.appspot.com",
//   messagingSenderId: "508169299284",
//   appId: "1:508169299284:web:5ecc94cf86e5f798f114c1",
//   measurementId: "G-2TNKWWLZ8Y"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const [random, setRandom] = useState(1)
  const [films, setFilms] = useState([])
  useEffect(() => {
    async function fetchData() {
      const res = await fetchFilm();
      setFilms(res)

    }
    fetchData();
  }, []);
  let arr = []
  if (films) {
    arr = films.map(film => film.id)

  }
  const firstFilm = films[0]
  console.log('filmsFirrst', firstFilm);
  console.log('dsds',films);
  const [film, setFilm] = useState(firstFilm)
  console.log('film',film)
  

  // let arr = []
  // if (films) {
  //   arr = films.map(film => film.id)

  // }
  useEffect(() => {
    async function fetchData() {
      const res = await fetchInfoFilm(arr[random]);
      setFilm(res)
     
    }
    fetchData();
  },[arr[random]]);
  const posterUrl = film?.poster_path;
  const posterTiltle = film?.original_title;
  let posterData = film?.release_date.split('-').slice(0,1).join('');

  const posterGenres = film?.genres;

  const newArr = [];
  if (posterGenres) {
    newArr.push(posterGenres.map(item => item.name))
  }

  const GENERES = newArr[0];

  return <div className={s.random}>
    <div className={s.random__title}>
       {posterUrl ? <img src={BASE_URL + posterUrl} /> : <h3>No Photo</h3>}
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
}

export default React.memo(Random);
