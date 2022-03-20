import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Boxoffice from "../../Pages/Boxoffice";
import Disk from "../../Pages/Disk";
import Media from "../../Pages/Media";
import Ratings from "../../Pages/Ratings";
import Society from "../../Pages/Society";
import Filmitem from "../Filmlist/FilmItem";
import Header from "../Header/Header";
import TopList from "../SortFilms/Top/Pages/TopList";
import Footer from "../Footer/Footer";
import Home from "../Home";


function AppRoutes({user}){
   
    return (
        
        <BrowserRouter>
        <Header user = {user}/>
       
           <Routes>
             <Route path = "/filmitem/:id" element={<Filmitem/>}/>
             <Route path ='/boxoffice' element={<Boxoffice/>}/>
             <Route path ='/media' element={<Media/>}/>
             <Route path ='/society' element={<Society/>} />
             <Route path ='/ratings' element={<Ratings/>} />
             <Route path ='/disk' element={<Disk/>} />
             <Route path ='/toplist' element ={<TopList/>}/>
             <Route path ='/user' element ={<Home user={user}/>}/>
           </Routes>
           <Footer/>
     </BrowserRouter>
    
       
    )
}

export default AppRoutes