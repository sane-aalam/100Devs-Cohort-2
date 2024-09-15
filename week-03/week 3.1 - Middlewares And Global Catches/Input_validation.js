const express = require("express");
const app = express();
const port = 5000;

app.get("/health-checkup", function (res, req) {
  const kidneys = req.body.kidneys;
  const kindneyLength = kidneys.length;

  res.send("you kidney length is" + kindneyLength);
});

app.listen(port);
