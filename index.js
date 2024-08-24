// first import install libery

var express = require("express");
var bodyParse = require("body-parser");
var mongoose = require("mongoose");

//create app

const app=express() 

app.use(bodyParse.json())
app.use(express.static ('public'))
app.use(bodyParse.urlencoded({
    extended: true 
}))

// conect database

mongoose.connect('mongodb+srv://anmolganorkar:<password>@cluster0.cvtqlxm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUr1Parser: true,
    useUnifiedTopology: true
})

var db = mongoose.connection;

// check connect

db.on('error', () => console.log("error in connecting database"));
db.once('open', () => console.log("Connected to Database"))

app.get("/", (req, res) => {

    res.set({
        "Allow-access-Allow-Origin":'*'
          })

    return res.redirect('loginform.html');

}).listen(3000);