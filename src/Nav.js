import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
function Nav() {
  const[show, handleShow] = useState(false)

  useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else 
            handleShow(false);
        
      });
      return() => {
          window.removeEventListener("scroll");
      };
  }, []);
    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img
              className="nav__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix logo"
            />

            <div className="nav__button">
                    <button className="banner__button">SignUp</button>
                    <button className="banner__button">Login</button>
            </div>

        </div>
      
     

     
        
    )
}

export default Nav
