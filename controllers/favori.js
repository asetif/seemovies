import API from "../../utils/API";

function createFavoris(name){

const favori = require("../../schema/schemaFavori.js");
const users = require("../../schema/schemaUser.js");

if (API.isAuth() === true) {
return{
async createFavoris ({name}) {
    await favori.insertOne({
        name: name,
        userId : users._id,
        createdAt: new Date()
    })
        return {}
        }
    }    
}
else{
    console.log("t'es pas connecter bg")
}
}