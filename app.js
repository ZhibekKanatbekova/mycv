//jshint esversion:6

const express = require("express");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index")
})















app.listen(process.env.PORT || 4000, function(responce){
  console.log("The server is working on 3000")
})