import React from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import Slide from "./Slide";
import s from './Slider.module.scss';
import useGetFilms from "../../APPServices/useGetFilms";


function Slider() {
    const posts = useGetFilms()
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