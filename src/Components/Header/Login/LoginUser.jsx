import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./Login.module.scss";
import nouser from "../../../images/user.png";

function LoginUser({user}) {
    const router = useNavigate();
    
  return (
    <div  onClick={() => router("/user")} className={s.user}>{ user
        ?
        <img src={user.photoURL} alt={user.displayName} />
        :
        <img src={nouser} alt={"No user"} />
        }
       
        
    </div>
  );
}

export default LoginUser;