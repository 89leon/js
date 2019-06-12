//jshint esversion:6
const express = require("express");

const app = express();

app.get("/" ,(request,response) => {

  response.sendFile(__dirname + "/index.html");

    //response.sendFile(__dirname);
});
app.get("/contact",(req,response) => {
  response.send("Contact me at: 89leon@gmail.com");
});

app.get("/about",(req,response)=> {
  response.send("HEAUEHAUHEU thats it.1");
});

app.listen(3000, ()=> console.log("server started"));
