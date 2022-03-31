import React from "react";
import s from "./WallPapers.module.scss";
import {BASE_URL} from "../../../constant/constant";

const WallPapers = ({post}) => {
 
 const {poster_path,original_title} = post;
 
  return <div className={s.postersSection}>
    
     <div className={s.posters}>
      <img src={BASE_URL+poster_path } alt={"myProj"}/>
      <p>{original_title}</p>
     </div>
     
  </div>;
};

export default WallPapers;
