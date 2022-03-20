import React from 'react'
import LogoAmazon from './images/LogoAmazon.png'
import s from './Footer.module.scss'

const Copyright = () => {
  return (
    <div className={s.footerLicenze}>
    <div className={s.footerLicenze__company}>
    <p>An </p> <img src={LogoAmazon} alt={'Amazon'}/><p> company.</p>
    </div>
   
    <div className={s.footerLicenze__copy}>
      <p>Copyright ©<span>1990-2016</span> IMDb.com, Inc.</p>
    </div>
  </div>
  )
}

export default Copyright