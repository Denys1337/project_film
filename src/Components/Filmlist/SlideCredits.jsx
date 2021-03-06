import React from "react";
import s from "./FilmItem.module.scss";
import {BASE_URL} from "../../constant/constant";

const SlideCredits = ({credit}) => {
    
    const { profile_path, name } = credit;
    
    return (
        <div className={s.SlideCredits}>
            
            {profile_path
                ?
                <img src={BASE_URL + profile_path} alt={"myProj"}/>
                :
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt={"myProj"}/>
            }
            <div className={s.name}>{name}</div>
        </div>
    );
};

export default SlideCredits;