const express = require('express');
const path = require('path');
const app = express();
const port =  process.env.PORT || 8000;

// public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

// routing
app.get("", (req, res)=>{
  res.send("Welcome to Time Table")
})

app.get("/about", (req, res)=>{
  res.send("Welcome to about page of Time Table")
})

app.get("/contact", (req, res)=>{
  res.send("Welcome to contact page of Time Table")
})

app.get("/features", (req, res)=>{
  res.send("Welcome to features page of Time Table")
})

app.get("/howto", (req, res)=>{
  res.send("Welcome to how to page of Time Table")
})

app.get("/login", (req, res)=>{
  res.send("Welcome to login page of Time Table")
})

app.get("*", (req, res)=>{
  res.send("404 error page OOPS!")
})

app.listen(port, ()=>{
  console.log(`Listening to the port at  ${port}`)
})