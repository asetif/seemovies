import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
function Nav() {
  const[show, handleShow] = useState(false)

  useEffect(() => {
      window.addEventListener("scorll", () => {
        if(window.scrolly > 100){
            handleShow(true);
        }else 
            handleShow(false);
        
      });
      return() => {
          window.removeEventListener("scroll");
      };
  })

changePage(() => {
    <Route exact path="/" component={Login} />
    window.location = "/Login";
}
    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img
              className="nav__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix logo"
            />
        <div className='login'>
            <button class='button' type="button" onclick="alert('Hello world!')">Login</button>
        </div>
        <div className='register'>
            <button class='register' type="button" onClick>Register</button>
        </div>
        </div>

     
        
    )
}

export default Nav
