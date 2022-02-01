import React, { useEffect, useState } from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import axios from "axios";
import Slide from "./Slide";
import s from './Slider.module.scss';


function Slider() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchFilm()
    }, []);

    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const API_KEY = '0c6e06ac468d17f199af4a1b4426b740';

    async function fetchFilm() {
      await axios.get(`trending/movie/week?api_key=${API_KEY}`)
            .then(res => setPosts(res.data.results))
    }

    return (
        <div className={s.sliderContainer}>
            <div className= {s.leftTitle}><p>Trending today</p></div>
            <div className={s.slider}>
                {posts.length > 0
                    ?
                    <Carousel show={4.9} slide={2} transition={0.5} >
                        {posts.map((post, i) => <Slide post={post} key={i} />)}
                    </Carousel>
                    :
                    <h1>Not Found Films</h1>
                }
            </div>
        </div>
    )
}

export default Slider