import './App.css';
import firebase from 'firebase/compat/app';
import React, { useEffect, useState } from 'react'
import Login from './Components/Header/Login/Login';
import AppRoutes from './Components/AppRoutes/AppRoutes';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])
  console.log(user);
  return (
    <div>
      
      {user ? <AppRoutes user ={user}/>:<Login/>}
      
      
    </div>
   
  );
}

export default React.memo(App);
