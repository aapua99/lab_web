var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Fans = require('./api/models/model'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/labDB');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


var routes = require('./api/routes/route'); //importing route
routes(app); //register the router

app.get("/fans.html", function (req, res) {
  res.sendFile(__dirname + "/fans.html")

})
app.get("/css/main.css", function (req, res) {
  res.sendFile(__dirname + '/css/main.css')
})
app.get("/css/bootstrap.min.css", function (req, res) {
  res.sendFile(__dirname + '/css/bootstrap.min.css')
})
app.get("/css/fans.css", function (req, res) {
  res.sendFile(__dirname + '/css/fans.css')
})
app.get("/css/news.css", function (req, res) {
  res.sendFile(__dirname + '/css/news.css')
})
app.get("/css/admin.css", function (req, res) {
  res.sendFile(__dirname + '/css/admin.css')
})
app.get("/js/script-fans.js", function (req, res) {
  res.sendFile(__dirname + '/js/script-fans.js')
})
app.get("/js/script-admin.js", function (req, res) {
  res.sendFile(__dirname + '/js/script-admin.js')
})
app.get("/js/script-news.js", function (req, res) {
  res.sendFile(__dirname + '/js/script-news.js')
})
app.get("/js/popper.min.js", function (req, res) {
  res.sendFile(__dirname + '/js/popper.min.js')
})
app.get("/js/jquery.min.js", function (req, res) {
  res.sendFile(__dirname + '/js/jquery.min.js')
})
app.get("/js/bootstrap.min.js", function (req, res) {
  res.sendFile(__dirname + '/js/bootstrap.min.js')
})
app.get("/img/aprilla_logo.png", function (req, res) {
  res.sendFile(__dirname + '/img/aprilla_logo.png')
})
app.get("/img/news_image.jpg", function (req, res) {
  res.sendFile(__dirname + '/img/news_image.jpg')
})
app.get("/news.html", function (req, res) {
  res.sendFile(__dirname + "/news.html")
})
app.get("/admin.html", function (req, res) {
  res.sendFile(__dirname + "/admin.html")
})
app.get("/img/icon.png", function (req, res) {
  res.sendFile(__dirname + '/img/icon.png')
})
app.get("/img/motor.jpg", function (req, res) {
  res.sendFile(__dirname + '/img/motor.jpg')
})


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);