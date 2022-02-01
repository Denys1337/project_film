import axios from 'axios';
import { useEffect, useState } from 'react';
import Filmlist from './Filmlist';
//0c6e06ac468d17f199af4a1b4426b740   key

function FilmALL() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchFilm()
  }, []);

  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';

  async function fetchFilm() {
    const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`)
    setPosts(response.data.results);

  }

  return (

    <div className="App">
      <Filmlist posts={posts} />
    </div>
  );
}

export default FilmALL;
