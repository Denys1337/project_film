import React, {useEffect} from "react";
import SliderHero from "../Components/SliderHero/SliderHero";
import SliderSecond from "../Components/SliderSecond/SliderSecond";
import useGetFilms from "../APPServices/useGetFilms";

function Society(){
    const posts = useGetFilms()

       return (
       
        <div>
            <SliderHero posts={posts}/>
            <SliderSecond posts={posts}/>
        </div>

    )
}

export default Society