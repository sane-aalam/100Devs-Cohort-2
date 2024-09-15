const express = require("express");
const app = express();
const port = 5000;

app.get("/health-checkup", function (res, req) {
  const kidneyId = req.query.kidneyId;
  const userName = req.query.userName;
  const password = req.query.password;

  if (userName != "Hakirat" && password != "123456") {
    res.status(5000).json({
      msg: "user donest exist",
    });
    return;
  }

  if(kidneyId != 1 && kidneyId != 2){
    res.status(5000).json({
      msg : "user donent exist"
    })
  }
});

app.listen(port);
