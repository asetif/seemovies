import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { makeStyles } from "@material-ui/core/styles";
//import { useHistory } from 'react-router-dom';
import axios from './axios';
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
        display: 'grid',
        backgroundColor:  "#333",
        border: "0",
        color:"#fff",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        margin: "auto",
        height: "30%",
        width: "20%",
        borderRadius: "4px",
        fontSize: 10,

    },
    }));
    const classes = useStyles();
  const[show, handleShow] = useState(false)
  const [open, setOpen] =React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const isInvalid = password === '' || email === '';

    /**
     * Register request on DB only if passWord and confPass are equals
     * @param nickName
     * @param email
     * @param password
     * @param confPass
     */
    function handleRegister(nickName, email, password, confPass){
        console.log(nickName, email, password);
        if (password === confPass) {
            axios.get("http://localhost:8800/user/register").then(response => {
                console.log(response.data)
            })

            axios
                .post("http://localhost:8800/user/register", {
                    nickName: nickName,
                    email: email,
                    password: password
                })
                .then(() => {
                    console.log("Register Post successful!")
                })
                .catch(() => {
                    console.log("Oops, request failed!")
                })
        }
        /*/}else{
            console.log("Le mail ou le mot de passe ne corresponde pas")
        }/*/
    }

 /* const handleLogin = (event) => {
    event.preventDefault();

    return Login
    .auth()
    .loginWithEmailAndPassword(email, password)
    .then(() => {
      history.push("http://localhost:8800/user/login");
    })
    .catch((error) => {
      setEmail('');
      setPassword('');
      setError(error.message);
    })
   
  }*/

    /**
     * Login  request on db with email and password
     * @param email
     * @param password
     */
      function handleLogin(email, password){
        console.log(email, password);
        axios.get("http://localhost:8800/user/login").then(response => {
            console.log(response.data)
          })

        axios
            .post("http://localhost:8800/user/login", {
              email: email,
              password: password
            })
            .then(() => {
              console.log("Post successful!")
            })
            .catch(() => {
              console.log("Oops, request failed!")
            })
        /*/}else{
            console.log("Le mail ou le mot de passe ne corresponde pas")
        }/*/
}

      useEffect(() => {
          window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else
                handleShow(false);

          });

      }, []);
        const handleOpen = () => {
            setOpen(true);
      };


      const handleClose = () => {
        setOpen(false);
      };
    return(
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav_inside">
                <img
                    className="nav__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix logo"
                />

                <div className="nav__button">
                    <button className="banner__button" onClick={handleOpen}>Sign Up</button>
                    <button className="banner__button" onClick={handleOpen}>Login</button>
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
                                <h2 className="transition-modal-title">Login</h2>
                                <form  >
                                <input 
                                placeholder="Email address"
                                 value={email}
                                onChange={({ target }) => setEmail(target.value)}
                               /> 
                               <input
                                type="password"
                                value={password}
                                 autoComplete="off"
                                 placeholder="Password"
                                onChange={({ target }) => setPassword(target.value)}
                               />   

                                <button className="submit" onSubmit={handleLogin(email, password)}>Submit</button>
                              </form>
                    
                            </div>
                        </Fade>
                    </Modal>
                </div>
            </div>

        </div>
      
     

     
        
    )
}

export default Nav
