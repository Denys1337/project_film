import React, { useEffect } from 'react';
import { useState } from 'react';
import { fetchFilm, fetchInfoFilm } from '../../../APPServices/Services';
import s from './Random.module.scss'

const Random = () => {
  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const [random, setRandom] = useState(5)
  const [films, setFilms] = useState()
  const [film, setFilm] = useState()
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
  useEffect(() => {
    async function fetchData() {
      const res = await fetchInfoFilm(arr[random]);
      setFilm(res)
    }
    fetchData();
  }, [random]);
  const posterUrl = film?.poster_path;

  return <div className={s.random}>
    {posterUrl ? <img src={BASE_URL + posterUrl} /> : <h3>No Photo</h3>}

    <button onClick={() => setRandom(Math.floor(Math.random() * arr.length))}>dacsc</button>
  </div>;
};

export default Random;
