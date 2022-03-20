import React from 'react';
import { auth } from '../AppServices/firebase'
import '../App.css';


const Home = ({user}) => {
   
  return (
    <div className="home">
         <img src={user.photoURL} alt="" />
      <h1>Hello, <span></span>{user.displayName}</h1>
     
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Home;