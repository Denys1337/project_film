import React,{useEffect, useState} from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import s from './SliderSecond.module.scss';
import SlideSecond from "../SliderSecond/SlideSecond"


function SliderSecond({posts}) {
 

    return (
        <div className={s.sliderContainer}>
            <div className= {s.leftTitle}><p>TRAILERS</p></div>
            <div className={s.slider}>
            {posts.length > 0
                    ?
                    <Carousel show={1} slide={1} transition={0.5} >
                        {posts.map((post, i) => <SlideSecond post={post} key={i} />)}
                    </Carousel>
                    :
                    <h1>Not Found Films</h1>
                }
            </div>
        </div>
    )
}

export default SliderSecond