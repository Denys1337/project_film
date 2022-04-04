import React from "react";
import s from "./SliderSecond.module.scss";
import SlideSecond from "../SliderSecond/SlideSecond";
import { Swiper ,SwiperSlide} from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/css/bundle";
import "swiper/scss/virtual";
import { Navigation, Pagination, Scrollbar, A11y,Virtual } from "swiper";


function SliderSecond({posts}) {


    return (
        <div className={s.sliderContainer}>
            <div className= {s.leftTitle}><p>TRAILERS</p></div>
            <div className={s.slider}>
            {posts.length > 0
                    ?
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Virtual]}
                    virtual
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                                   
                    >
                        {posts.map((post, i) => <SwiperSlide virtualIndex={i} key={i}> 
                        {({ isActive }) => (
                        <div><SlideSecond post={post} key={i} isActive={isActive} />,{isActive ? "active" : "not active"}
                        </div>
    )}
                        </SwiperSlide>)}
                    </Swiper>
                    :
                    <h1>Not Found Films</h1>
                }
            </div>
        </div>
    );
}

export default SliderSecond;