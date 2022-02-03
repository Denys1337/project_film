import React from "react";
import s from './Navigation.module.scss';
import {useNavigate,NavLink} from 'react-router-dom';


function Navigation(){
  
    const router =useNavigate();
    return (
        
       <ul className={s.headerNav} >
           <li ><NavLink to="/boxoffice" onClick={()=>router(`/boxoffice`)}  href="">Box Office</NavLink></li>
           <li><NavLink to="/media" onClick={()=>router(`/media`)}  >Media</NavLink></li>
           <li><NavLink to="/society" onClick={()=>router(`/society`)}  href="/society">Society</NavLink></li>
           <li><NavLink to="/ratings" onClick={()=>router(`/ratings`)}>Ratings</NavLink></li>
           <li><NavLink to="/Disk" onClick={()=>router(`/disk`)}>DVD & Blu-Ray</NavLink></li>
       </ul>
            
    
       
    )
}

export default Navigation