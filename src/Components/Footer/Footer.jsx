import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import s from './Footer.module.scss'
import appstore from './images/Appstore.png'
import google from './images/google.png'
import amazon from './images/amazon.png'
import Facebook from './images/Facebook.png'
import Instagram from './images/Instagram.png'
import Yputube from './images/Yputube.png'
import Gplus from './images/Gplus.png'
import Twitter from './images/Twitter.png'
import { fetchTopFilm } from '../../APPServices/Services'
import LogoAmazon from './images/LogoAmazon.png'


const Fotter = () => {

  const BASE_URL = "https://image.tmdb.org/t/p/w500/";
  const [tops, setTops] = useState('');
  useEffect(() => {
    async function fetchData() {
      const res = await fetchTopFilm(1);
      setTops(res)
    }
    fetchData()
  }, [])
 

  return (
    <div>
    <div className={s.footer}>
      <div className={s.footer__every}>
        <h3>IMDb Everywhere</h3>
        <div className={s.footer__image}>
          <img src={appstore} alt={'appstore'}/>
          <img src={google} alt={'google'}/>
          <img src={amazon} alt={'amazon'}/>
        </div>
        <p>Find showtimes, watch trailers, browse photos, track your
           Watchlist and rate 
          your favorite movies and TV shows on your phone or tablet!</p>
          <Link to='#' className={s.mobLink}>IMDB Mobile site</Link>

      </div>
      <div className={s.footer__follow}>
        <h3>Follow us</h3>
        <div className={s.footer__social}>
          <img src={Facebook} alt={"Facebook"} />
          <img src={Instagram} alt={"Instagram"} />
          <img src={Yputube} alt={"Yputube"} />
        <div>
          <img src={Gplus} alt={"Gplus"} />
          <img src={Twitter} alt={"Twitter"} />
        </div>
        </div>
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
      <div className={s.footer__LinkPage}>
        <ul>
          <li><Link to='#' className={s.footer__link}>Home</Link></li>
          <li><Link to='#' className={s.footer__link}>Top Rated Movies</Link></li>
          <li><Link to='#' className={s.footer__link}>Box Office</Link></li>
          <li><Link to='#' className={s.footer__link}>TV</Link></li>
          <li><Link to='#' className={s.footer__link}>Coming Soon</Link></li>
          <li><Link to='#' className={s.footer__link}>Site Index</Link></li>
          <li><Link to='#' className={s.footer__link}>Search</Link></li>
        </ul>
        <ul>
          <li><Link to='#' className={s.footer__link}>Contact Us</Link></li>
          <li><Link to='#' className={s.footer__link}>Message Boards</Link></li>
          <li><Link to='#' className={s.footer__link}>Account</Link></li>
          <li><Link to='#' className={s.footer__link}>News</Link></li>
          <li><Link to='#' className={s.footer__link}>Press Room</Link></li>
          <li><Link to='#' className={s.footer__link}>Advertising</Link></li>
          <li><Link to='#' className={s.footer__link}>Jobs</Link></li>
        </ul>
        <ul>
          <li><Link to='#' className={s.footer__link}>IMDbPro</Link></li>
          <li><Link to='#' className={s.footer__link}>Box Office Mojo</Link></li>
          <li><Link to='#' className={s.footer__link}>Withoutabox</Link></li>
          <li><Link to='#' className={s.footer__link}>Conditions of Use</Link></li>
          <li><Link to='#' className={s.footer__link}>Privacy Policy</Link></li>
          <li><Link to='#' className={s.footer__link}>Interest-Based Ads</Link></li>
        </ul>
      </div>
    </div>
    <div className={s.footerLicenze}>
      <div className={s.footerLicenze__company}>
      <p>An </p> <img src={LogoAmazon} alt={'Amazon'}/><p> company.</p>
      </div>
     
      <div className={s.footerLicenze__copy}>
        <p>Copyright ©<span>1990-2016</span> IMDb.com, Inc.</p>
      </div>
    </div>
    </div>
  )
}

export default Fotter