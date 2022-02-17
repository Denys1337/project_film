import React from "react";
import SliderHero from "../Components/SliderHero/SliderHero";
import SliderSecond from "../Components/SliderSecond/SliderSecond";
import useGetFilms from "../APPServices/useGetFilms";
import News from "../Components/News/News";
import SortFilms from "../Components/SortFilms/SortFilms";


function Society(){
    const posts = useGetFilms();
   
       return (
       
        <div>
            <SliderHero posts={posts}/>
            <SliderSecond posts={posts}/>
            <News posts = {posts}/>
            <SortFilms/>
            
        </div>

    )
}

export default Society