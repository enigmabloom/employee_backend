// Task1: initiate app and run server at 3000

const path=require('path');
//app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
var express = require ("express");
var morgan = require ("morgan");
require('dotenv').config();
const employeelist= require("./routes/employeelist");
require("./db/dbConnection");

var app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api",employeelist);


app.listen(process.env.port,()=>{
    console.log(`listening to port${process.env.port}`)
})


// Task2: create mongoDB connection 


//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'
//http://localhost:3000/api/get




//TODO: get single data from db  using api '/api/employeelist/:id'

//http://localhost:3000/api/get/id



//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
//http://localhost:3000/api/add






//TODO: delete a employee data from db by using api '/api/employeelist/:id'
//http://localhost:3000/api/delete/id





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
//http://localhost:3000/api/edit/id


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



