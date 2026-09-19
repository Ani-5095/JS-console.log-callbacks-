const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());
const ALL_USERS = [
  {
    username: "Anirudh@gmail.com",
    password: "123",
    name: "Anirudh Trivedi",
  },
  {
    username: "Akashdeep@gmail.com",
    password: "123321",
    name: "Akashdeep Chauhan",
  },
  {
    username: "Arpit@gmail.com",
    password: "123321",
    name: "Arpit Awasthi",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists in ALL_USERS array
  return ALL_USERS.find((user) => user.username === username && user.password === password) !== undefined;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
//  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({ 
      users: ALL_USERS.filter(function(value) {
      if(value.username == username) {
        return false;
    }
    else {
      return true;
    }
  })
});
  } 
  /*catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  } */
);

app.listen(3000);