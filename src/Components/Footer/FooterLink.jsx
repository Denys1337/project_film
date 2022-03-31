import React from "react";
import s from "./Footer.module.scss";
import { Link } from "react-router-dom";

const FooterLink = () => {
  
  return (
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
  );
};

export default FooterLink;