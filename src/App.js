import './App.css';
// import {BrowserRouter, Route,Routes} from "react-router-dom";
// import Filmitem from './Components/Filmlist/FilmItem';
// import Header from './Components/Header/Header';
// import Boxoffice from './Pages/Boxoffice';
// import Media from './Pages/Media';
// import Ratings from './Pages/Ratings';
// import Disk from './Pages/Disk';  
// import Society from './Pages/Society';
// import TopList from './Components/SortFilms/Top/Pages/TopList';
// import Footer from './Components/Footer/Footer';

import firebase from 'firebase/compat/app';
import React, { useEffect, useState } from 'react'
import Home from './Components/Home';
import Login from './Components/Header/Login/Login';
import APProutes from './Components/APProutes/APProutes';



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
      
      {user ? <APProutes user ={user}/>:<Login/>}
      
      
    </div>
   
  );
}

export default React.memo(App);
