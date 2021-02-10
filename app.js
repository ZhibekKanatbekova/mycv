//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index")
})

app.post("/", function (req, res) {
  let query = req.body.cityName;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=2d81a22eaf80f934ea7b4fd617c52681&units=metric`;
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      let weatherData = JSON.parse(data);
      let temp = weatherData.main.temp;
      let icon = weatherData.weather[0].icon;
      let image = "http://openweathermap.org/img/wn/" + icon + "@2x.png";;
      let result = `The temperature in ${query} is ${temp}. ${image}`;
      console.log(result)
      res.render("index", {results: result})
    });
  });
});













app.listen(process.env.PORT || 4000, function(responce){
  console.log("The server is working on 3000")
})