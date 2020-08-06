const express = require('express');
const app = express();
const connection = require('../database/database');
const routes = require('./routes');
const cors = require('cors');
// const bodyParser = require('body-parser');

connection.authenticate()
    .then(() =>{
        console.log("banco connectado");
    })
    .catch((err) =>{
        console.log(err);
    })

app.use(cors());

app.use(express.json());

app.use(routes)

app.listen(8000, function(error){
    if(error){
        console.log("erro ao executar o servidor");
    }else{
        console.log("servidor executado com sucesso");
    }
});