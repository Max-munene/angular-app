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
const users = [];

app.post("/add-user", (req, res) => {
  const userData = req.body;
  users.push(userData);
  res.status(200).json({ message: "Data Received!" });
});

app.get("/get-user", (req, res) => {
  // Send user data as the response
  res.status(200).json(users); // Fixed req.status to res.status
});

//Listen to port
app.listen(PORT, () => console.log("server running on localhost:" + PORT));
