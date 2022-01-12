const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var result = weight/height*100/height*100;
    res.send("Your BMI is: " + result.toFixed(2));
})

app.get("/contacts", function(req, res){
    res.sendFile(__dirname + "/contacts.html");
})

app.listen(process.env.PORT || "3000", function(){
    console.log("Server is Started on localhost:3000");
})