import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Footer.module.scss";
import appstore from "./images/Appstore.png";
import google from "./images/google.png";
import amazon from "./images/amazon.png";
import { fetchTopFilm } from "../../AppServices/Services";
import {BASE_URL} from "../../constant/constant";
import Copyright from "./Copyright";
import FooterLink from "./FooterLink";
import Social from "./Social";


const Fotter = () => {

 
  const [tops, setTops] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetchTopFilm(1);
      setTops(res);
    }
    fetchData();
  }, []);
 

  return (
    <div>
    <div className={s.footer}>
      <div className={s.footer__every}>
        <h3>IMDb Everywhere</h3>
        <div className={s.footer__image}>
          <img src={appstore} alt={"appstore"}/>
          <img src={google} alt={"google"}/>
          <img src={amazon} alt={"amazon"}/>
        </div>
        <p>Find showtimes, watch trailers, browse photos, track your
           Watchlist and rate 
          your favorite movies and TV shows on your phone or tablet!</p>
          <Link to='#' className={s.mobLink}>IMDB Mobile site</Link>

      </div>
      <div className={s.footer__follow}>
        <h3>Follow us</h3>
        <Social/>
      </div>
      <div className={s.footer__gallery}>
        <h3>Flickr Gallery</h3>
          <div>
          {tops
      ?
      tops.map((top, i) =>  <img src={BASE_URL + top.backdrop_path} alt={"img"} key ={i} />).slice(0, 6)
      :
      <h1>Not Found</h1>
    }
         
          </div>
      </div>
      <FooterLink/>
    </div>
    <Copyright/>
    </div>
  );
};

export default Fotter;