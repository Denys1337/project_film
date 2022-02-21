import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Filmitem from './Components/Filmlist/FilmItem';
import Header from './Components/Header/Header';
import Boxoffice from './Pages/Boxoffice';
import Media from './Pages/Media';
import Ratings from './Pages/Ratings';
import Disk from './Pages/Disk';  
import Society from './Pages/Society';
import TopList from './Components/SortFilms/Top/Pages/TopList';

function App() {

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
</BrowserRouter>
  );
}

export default App;
