import React from 'react'
import { useNavigate } from 'react-router-dom';
import s from './Login.module.scss'

function LoginUser({user}) {
    const router = useNavigate();
    
  return (
    <div  onClick={() => router(`/user`)} className={s.user}>{ user 
        ?
        <img src={user.photoURL} alt={user.displayName} />
        :
        <h2>No user</h2>
        }
       
        
    </div>
  )
}

export default LoginUser