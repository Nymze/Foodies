const express = require("express");
const app = express().get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../", "index.html"));
});
var path = require("path");

app.use(express.static("public"));

//make way for some custom css, js and images
app.use("/css", express.static(__dirname + "/public/css"));

/* app.get("/", function(req, res) {
  res.sendfile(__dirname + "./index.html");
}); */

/* app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../", "index.html"));
}); */

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
