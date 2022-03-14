import react from "react";
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

function APProutes(){
   
    return (
        
        <BrowserRouter>
        <Header/>
       
           <Routes>
             <Route path = "/filmitem/:id" element={<Filmitem/>}/>
             <Route path ='/boxoffice' element={<Boxoffice/>}/>
             <Route path ='/media' element={<Media/>}/>
             <Route path ='/society' element={<Society/>} />
             <Route path ='/ratings' element={<Ratings/>} />
             <Route path ='/disk' element={<Disk/>} />
             <Route path ='/toplist' element ={<TopList/>}/>
           </Routes>
           <Footer/>
     </BrowserRouter>
    
       
    )
}

export default APProutes