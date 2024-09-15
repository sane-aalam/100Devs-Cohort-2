const express = require("express");
// import express from "express"; ES6(new way to write code)
const app = express();
const port = 5000;

const StudentMangement = [11,11,11,10,10,10];

app.get("/", function (req, res) {
  let numberofElevel = 0;
  let numberofTens = 0;
  for(let i = 0; i < StudentMangement.length; i++){
    if(StudentMangement[i] == 11){
      numberofElevel++;
    }else{
      numberofTens++;
    }
  }
  console.log(numberofElevel,numberofTens);
});

app.listen(port, function () {
  console.log(`running server on the port http://localhost:${port}`);
});
