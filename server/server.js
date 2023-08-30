//require the packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//port

const PORT = 3000;

//Instance of express

const app = express();

//specify body parser to handle json data
app.use(bodyParser.json());

//use cors package
app.use(cors());

//perform get request
app.get("/", (req, res) => {
  res.send("Hello from Server");
});

//post form data
app.post("/add-user", (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: "Data Recieved!" });
});

//Listen to port

app.listen(PORT, () => console.log("server running on localhost" + PORT));
