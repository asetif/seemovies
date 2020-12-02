import React, { useEffect, useState } from 'react';
import "./Nav.css";

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
    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img
              className="nav__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix logo"
            />

        </div>
    )
}

export default Nav
