import React, { useEffect, useState } from 'react';
import "./Nav.css";

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
              src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png"
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
