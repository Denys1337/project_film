import React from "react";
import { auth } from "../APPServices/firebase";
import "../App.css";
import {signInWithGoogle} from "../APPServices/firebase";


const Home = ({user}) => {
  console.log(user) ;

  return (
    <div className="home">
    {user 
      ?
    <div className="regUser">
         <img src={user.photoURL} alt={"myProj"} />
      <h1>Hello, {user.displayName}</h1>
     
      <button className="button singout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  
  :
  <button className="button signin" onClick={signInWithGoogle}><i ></i>Sign in with google</button>
}
</div>
  );
};

export default Home;