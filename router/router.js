const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser')

const app = express();

// Connection Mysql

const connection = mysql.createConnection({
    host : '5.196.243.43',
    user : 'netflix',
    password : '2WfeZQ12FWokj7Qc',
    database : 'netflix',
});

connection.connect(err => {
    if (err) {
        console.log("conection error");
        return err;
    }
});


// Connection Express Body-Parser Cors

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from the users server')
});

// Selectionner Tous Les Utilisateurs

app.get('/users', (req, res) => {
    const selectQuery = 'SELECT * FROM userslist';
    connection.query(selectQuery, (err, results) => {
    if(err) {
         res.send(err)
    }
    else {
         res.json({data: results})
        }
   });
});  

// Ajouter Un Nouveau Utilisateur

app.post('/users/add', (req, res) => {
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let adresse = req.body.adresse;
    let email = req.body.email;

    let insertQuery ="INSERT INTO userslist SET ?"
    const user={nom,adresse,prenom,email}
    connection.query(insertQuery,user, (err, results) => {
        if(err) {
            console.log("insert error");
            res.send(err)
        }
        else {
            res.send({ error: false, data: results, message: 'user has been updated successfully.' });
        }

    });   
});

// Editer Un Nouveau Utilisateur

app.post('/users/update/:id', (req, res) => {
    let id = req.params.id;
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let adresse = req.body.adresse;
    let email = req.body.email;
    let updateQuery =`UPDATE userslist SET ? WHERE id=${id}`
    const user={nom,adresse,prenom,email}

    connection.query(updateQuery,user, (err, results) => {
        if(err) {
            console.log("insert error");
            res.send(err)
        }
        else {
            res.send({ error: false, data: results, message: 'user has been updated successfully.' });
        }
    });   
});

// Suprimer un Utilisateur

app.post("/users/delete/:id", (req, res) => {
    let id = req.params.id;
    let sql = 'DELETE  FROM userslist WHERE id=?';

    connection.query(sql, [id], (error, results, fields) => {
      if (error) 
      console.error(error.message);
      console.log("Deleted Row(s):", results.affectedRows);
      res.json({error:false,data: results})
    });
});

app.listen(4000, () => {
    console.log('Users server worked on port 4000...')
});