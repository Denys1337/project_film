import React from "react";
import Facebook from "./images/Facebook.png";
import Instagram from "./images/Instagram.png";
import Yputube from "./images/Yputube.png";
import Gplus from "./images/Gplus.png";
import Twitter from "./images/Twitter.png";
import s from "./Footer.module.scss";

const Social = () => {
  
  return (
    <div className={s.footer__social}>
    <img src={Facebook} alt={"Facebook"} />
    <img src={Instagram} alt={"Instagram"} />
    <img src={Yputube} alt={"Yputube"} />
  <div>
    <img src={Gplus} alt={"Gplus"} />
    <img src={Twitter} alt={"Twitter"} />
  </div>
  </div>
  );
};

export default Social;