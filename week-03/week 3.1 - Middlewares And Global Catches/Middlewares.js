// ## Middlewares in JS Context & Problem Statement:
// Earlier we used to organize all our prechecks followed by the application logic all in one route.
// Middlewares emerged as a solution to enhance code organization by extracting prechecks from the core application logic. The motivation behind their introduction lies in our commitment to the `"Don't Repeat Yourself" (DRY) principle.`

// By isolating these preliminary checks into distinct functions or code blocks known as middlewares, we achieve a more modular and maintainable codebase. This separation not only streamlines the primary application logic but also promotes code reuse, making it easier to manage, understand, and scale our software architecture.

// app.get('/health-check', middleware-1, middleware-2,(res,req)=>{})
// app.get('/blood-check', middleware-1, middleware-2,(res,req)=>{})
// app.get('/kidney-check', middleware-1, middleware-2,(res,req)=>{})
// app.get('/heart-check', middleware-1, middleware-2,(res,req)=>{})

const express = require("express");
const app = express();
const port = 5000;

//# MiddleWare for username,passward validation checked
function userMiddleware(res, res, next) {
  if (userName != "Hakirat" && passowrd != "passowrd") {
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    next();
  }
}

//# MiddleWare for kidneyId validation checked
function kidneyMiddleware(res, req, next) {
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "incorrect inputs",
    });
  } else {
    next();
  }
}

app.get("health-check", userMiddleware, kidneyMiddleware, function (res, req) {
  res.send("Your health is fine!");
});

app.get("blood-check", userMiddleware, kidneyMiddleware, function (res, req) {
  res.send("Your blood is fine!");
});

app.get("heart-check", userMiddleware, kidneyMiddleware, function (res, req) {
  res.send("Your heart is fine!");
});

app.listen(port);
