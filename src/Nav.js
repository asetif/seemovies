import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { makeStyles } from "@material-ui/core/styles";

import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
function Nav() {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
    const classes = useStyles();
  const[show, handleShow] = useState(false)
  const [open, setOpen] =React.useState(false);

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
    const handleOpen = () => {
     setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img
              className="nav__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix logo"
            />

            <div className="nav__button">
                    <button className="banner__button" >Sign Up</button>
                    <button className="banner__button"onClick={handleOpen}>Login</button>
                    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>

            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
            </div>

        </div>
      
     

     
        
    )
}

export default Nav
