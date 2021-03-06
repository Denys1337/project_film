import s from "./App.css";
import firebase from "firebase/compat/app";
import React, { useEffect, useState } from "react";
import AppRoutes from "./Components/APProutes/APProutes";



const  App = () =>  {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  }, []);
  
  return (
    <div className={s.App}>
      
      <AppRoutes user={user}/>
      
      
    </div>
   
  );
};

export default React.memo(App);
