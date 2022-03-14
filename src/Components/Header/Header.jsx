import React from "react";
import './Header.modules.scss';
import Login from "./Login/Login";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";

function Header(){
  
  
    return (
        
       <header>
           <Logo/>
           <Navigation/>
           <Search/>
           <Login/>
       </header>
            
    
       
    )
}

export default Header