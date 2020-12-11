import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { makeStyles } from "@material-ui/core/styles";
//import { useHistory } from 'react-router-dom';
import axios from './axios';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import API from "./utils/API";

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
  const [openSingup, setSingup] =React.useState(false);
  const [email, setEmail] = useState('');
  const [EmailRegister, setEmailRegister] = useState('');
  const [password, setPassword] = useState('');
  const [PasswordRegister, setPasswordRegister] = useState('');
  const [Confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  const isInvalid = password === '' || email === '';

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

const handleLogin = function handleLogin(event){
    event.preventDefault();
    const { email, password } = this.state
 
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
   
}
/*/
function handleRegister(email, password, Confirmpassword){
  console.log(email, password, Confirmpassword);
  if (password === Confirmpassword) {
      axios.get("http://localhost:8800/user/signup").then(response => {
          console.log(response.data)
      })

      axios
          .post("http://localhost:8800/user/signup", {
              email: email,
              password: password
          })
          .then(() => {
              console.log("Register Post successful!")
          })
          .catch(() => {
              console.log("Oops, request failed!")
          })
  }else{
      console.log("le mot de passe ne corresponde pas")
  }
}/*/
async function send (event){
  event.preventDefault();

  const { EmailRegister, PasswordRegister, Confirmpassword } = this.state
  if (!EmailRegister || EmailRegister.length === 0) return;
  if (!PasswordRegister || PasswordRegister.length === 0 || PasswordRegister !== Confirmpassword) return;
  try {
    const { data } = await API.signup({
      email: EmailRegister,
      password: PasswordRegister
    });
    localStorage.setItem("token", data.token);
  } catch (error) {
    console.error(error);
  }
};



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
  const handleSingupOpen = () => {
    setSingup(true);
 };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseRegister = () => {
    setSingup(false);
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
                    <button className="banner__button"onClick={handleSingupOpen} >Sign Up</button>
                    <button className="banner__button"onClick={handleOpen}>Login</button>

                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={openSingup}
                        onClose={handleCloseRegister}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500
                        }}
                        >
                        <Fade in={openSingup}>
                          <div className={classes.paper}>
                              <h2 className="transition-modal-title">Signup</h2>
                              <form  >
                              <input 
                              placeholder="Email address"
                              value={EmailRegister}
                              onChange={({ target }) => setEmailRegister(target.value)}
                             /> 

                             <input
                              type="password"
                              value={PasswordRegister}
                               autoComplete="off"
                               placeholder="Password"
                              onChange={({ target }) => setPasswordRegister(target.value)}
                             />   

                             <input
                              type="password"
                              value={Confirmpassword}
                               autoComplete="off"
                               placeholder="Confirm Password"
                              onChange={({ target }) => setConfirmPassword(target.value)}
                             />   
                              <button className="submit" onSubmit={send}>Submit</button>
                            </form>
                  
                          </div>
                      </Fade>
                      </Modal>
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
                                <form>
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
                               
                              <button className="submit" onSubmit={handleLogin}>Submit</button>

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
