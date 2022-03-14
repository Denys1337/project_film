import React, { useEffect, useState } from "react";
import SliderHero from "../Components/SliderHero/SliderHero";
import SliderSecond from "../Components/SliderSecond/SliderSecond";
import News from "../Components/News/News";
import SortFilms from "../Components/SortFilms/SortFilms";
import { fetchFilm } from "../APPServices/Services";


function Society(){
    const [posts,setPosts] = useState('')
    useEffect(() => {
        async function fetchData() {
          const res = await fetchFilm();
          setPosts(res)
        }
        fetchData()
      }, [])
      
   
       return (
       
        <div>
            <SliderHero posts={posts}/>
            <SliderSecond posts={posts}/>
            <News posts = {posts}/>
            <SortFilms posts ={posts}/>
            
        </div>

    )
}

export default  React.memo(Society) 