import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { makeStyles } from "@material-ui/core/styles";
import axios from "./axios";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { findAllByTestId } from '@testing-library/react';
function Nav({ requests, updateSearchedMovie }) {
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
  const [inputField, setInput] = useState('');
  const [movies, setMovies] = useState();

  

  useEffect(() => {


    


    async function fetchData() {
        const arrayObj = Object.values(requests);
        const arrayResults = [];
        for (let element of arrayObj){
            try {
                var result = await axios.get(element);
                arrayResults.push(result.data.results);
            }
            catch(e){
                console.log(e.message);
            }
        }
        setMovies(arrayResults);
        //console.log(arrayResults);
    }
    fetchData();

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

  function handleChange(e){
    const inputValue = (e.target.value);
    movies.forEach(arrayMovies => {
        arrayMovies.forEach((movie)=>{
            if (movie.name){
                if (movie.name.toLowerCase() == inputValue.toLowerCase()){
                    console.log("trouvé");
                    console.log(movie.backdrop_path);
                    updateSearchedMovie(movie);
                    return movie.backdrop_path;
                }
            }
            if (movie.title){
                if (movie.title.toLowerCase() == inputValue.toLowerCase()){
                    console.log("trouvé");
                    console.log(movie.backdrop_path);
                    updateSearchedMovie(movie);
                    return movie.backdrop_path;
                }
            }
        })
    });
}


    return(
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav_inside">
                <div className="nav__left">
                    <img
                        className="nav__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="Netflix logo"
                    />
                    <input type="text" placeholder="Search..." onChange={handleChange} />
                </div>

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

        </div>
      
     

     
        
    )
}

export default Nav
