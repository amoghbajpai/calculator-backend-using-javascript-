const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function () {
  console.log("server running on port + ${port}");
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/Index.html");
});

app.post("/", function (request, response) {
  var N1 = Number(request.body.n1);
  var N2 = Number(request.body.n2);
  var Ans = String(N1 + N2);
  response.send("the addition of the two numbers is  is: " + Ans);
});

app.get("/about", function (request, response) {
  response.send("this is a basic calculator");
});
