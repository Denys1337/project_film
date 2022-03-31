import React from "react";
import s from "./Header.module.scss";
import LoginUser from "./Login/LoginUser";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Search from "./Search/Search";

function Header({user}){
  
  
    return (
        
       <header>
           <Logo/>
           <Navigation/>
           <div className={s.leftHeader}>
              <Search/>
             <LoginUser user ={user}/>
           </div>
          
       </header>
            
    
       
    );
}

export default Header;