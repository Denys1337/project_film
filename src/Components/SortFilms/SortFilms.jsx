import React from "react";
import BoxOffice from "./BoxOffice/BoxOffice";
import Random from "./Random/Random";
import Top from "./Top/Top";
import s from "./SortFilms.module.scss";

const SortFilms = ({posts}) => {
     
  return <div className={s.sort}>
      <Top/>
      <Random/>
      <BoxOffice posts ={posts}/>

  </div>;
};

export default SortFilms;
