const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const jwtpass = "SECRET";
const all_users = [
  {
    username: "Akhil",
    password: "12312456",
  },
  {
    username: "John",
    password: "987612154",
  },
  {
    username: "Numan",
    password: "098712165",
  },
];

// Arrow function 
function userExist(username, password) {
  return all_users.some(
    (user) => user.username === username && user.password === password
  );
}

app.use(express.json());

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExist(username, password)) {
    return res.status(403).json({
      msg: "Invalid user credentials",
    });
  }
  var token = jwt.sign(
    {
      username: username,
    },
    jwtpass
  );
  return res.status(200).json({
    token,
  });
});

app.get("/users", (req, res) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      msg: "Token not provided",
    });
  }

  try {
    const v = jwt.verify(token, jwtpass);
    const username = v.username;
    if (!all_users.some((user) => user.username === username)) {
      return res.status(401).json({
        msg: "Unauthorized access",
      });
    }
    const otherUsers = all_users.filter((user) => user.username !== username);

    return res.status(200).json({
      otherUsers,
    });
  } catch (error) {
    return res.status(401).json({
      msg: "Invalid token",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
