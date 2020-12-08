//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const axios = require('axios');


//Connexion à la base de donnée
mongoose
  .connect("mongodb://netflixlike:NxEopYXH4Tu5avtBp@144.76.13.213/netflixlike")
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while DB connecting");
    console.log(e);
  });

//On définit notre objet express nommé app
const app = express();

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);

app.use(bodyParser.json());

//Définition des CORS
app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//Définition du routeur
const router = express.Router();

app.get('/youtube',(req, res)=>{
  const theo = 'batman';
  axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBzIfpwfzf4J2FkiGaZUgAywdL0QZ_3RNA&type=video&part=snippet&maxResults=1&q=" + theo + "_trailer")
  .then(response => {
    for (var i in response.data.items){
      var item = response.data.items[i];
      console.log("title : ", item.id.videoId);
      return (item.id.videoId);
    }
  })
  .cath(error =>{
    console.log(error);
  });
})

app.use("/user", router);
require("./controllers/userController")(router);

app.use("/favoris", router);
require("./controllers/favorisController")(router);

//Définition et mise en place du port d'écoute
const port = 8800;
app.listen(port, () => console.log(`Listening on port ${port}`));