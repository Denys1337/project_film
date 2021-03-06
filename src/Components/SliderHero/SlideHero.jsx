import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./SliderHero.module.scss";
import {BASE_URL} from "../../constant/constant";

const SlideHero = ({post,user}) => {
 
  const router = useNavigate();
  const { id, poster_path } = post;
  
  return <div className={s.slide}>
             <img src={BASE_URL + poster_path} alt={"myProj"} />
             <div className={s.descr}>
                 <div className={s.info} onClick={() =>{user === null ? router("/user") : router(`/filmitem/${id}`) ;} }><p>Information</p></div>
                 <div className={s.watch}><p>Add to watch list</p></div>
              </div>
        </div>;
};

export default SlideHero;
