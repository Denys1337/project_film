import React from "react";
import s from "./SliderSecond.module.scss";
import SlideSecond from "../SliderSecond/SlideSecond";
import { Swiper ,SwiperSlide} from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";


function SliderSecond({posts}) {


    return (
        <div className={s.sliderContainer}>
            <div className= {s.leftTitle}><p>TRAILERS</p></div>
            <div className={s.slider}>
            {posts.length > 0
                    ?
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    className="swiper-horizontal"
                    
                    >
                        {posts.map((post, i) => <SwiperSlide key={i} ><SlideSecond post={post} key={i} /></SwiperSlide>)}
                    </Swiper>
                    :
                    <h1>Not Found Films</h1>
                }
            </div>
        </div>
    );
}

export default SliderSecond;