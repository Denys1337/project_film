import React from "react";
import { Carousel} from '@trendyol-js/react-carousel';
import SlideHero from "./SlideHero";
import s from './SliderHero.module.scss';



function SliderHero({posts}) {
  
    
    return (
        <div className={s.sliderContainer}>
            <div className= {s.leftTitle}><p>Trending today</p></div>
            <div className={s.slider}>
                {posts.length > 0
                    ?
                    <Carousel
                        show={4.9}
                        slide={2} 
                        transition={0.5} 
                        swiping={true}
                        responsive={true}>
                        {posts.map((post, i) => <SlideHero post={post} key={i} />)}
                    </Carousel>
                    :
                    <h1>Not Found Films</h1>
                }
            </div>
        </div>
    )
}

export default SliderHero