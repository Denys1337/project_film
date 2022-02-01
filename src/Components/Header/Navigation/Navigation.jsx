import React from "react";
import s from './Navigation.module.scss';
import {useNavigate,Link} from 'react-router-dom';


function Navigation(){
  
    const router =useNavigate();
    return (
        
       <ul className={s.headerNav} >
           <li ><Link to="/boxoffice" onClick={()=>router(`/boxoffice`)}  href="">Box Office</Link></li>
           <li><Link to="/media" onClick={()=>router(`/media`)}  >Media</Link></li>
           <li><Link to="/society" onClick={()=>router(`/society`)}  href="/society">Society</Link></li>
           <li><Link to="/ratings" onClick={()=>router(`/ratings`)}>Ratings</Link></li>
           <li><Link to="/Disk" onClick={()=>router(`/disk`)}>DVD & Blu-Ray</Link></li>
       </ul>
            
    
       
    )
}

export default Navigation