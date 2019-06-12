//jshint esversion: 6
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken');
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', (req, res) => res.json({
  message: "Welcome to the server!"
}));
app.get('/api', (req, res) => res.json({
  message: "Welcome to the server API!"
}));
app.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  // Mock user
  const user = {
    username: 'leon',
    password: '123'
  }
  if (verifyUser(user)) {
    jwt.sign({
      user: user
    }, 'secretkey', {
      expiresIn: '30s'
    }, (err, token) => {
      res.json({
        token,
        errorCode: 0
      });
    });
  } else {
    res.json({
      message: 'wrong credentials',
      errorCode: -1
    });
  }

});
app.get('/api/posts', verifyToken, (req, res) => {
  console.log("gavno");
  res.sendStatus(200);
}, (req, res) => {
  res.json({
    message: "Post created...",
    authData
  });
});


//FORMAT OF TOKEN
// Authorization: Brearer <access_token>
// Verify Token
function verifyToken(req, res, next) {
  //Get auth header value
  var bearerHeader = req.headers['authorization'];
  console.log("bearer", bearerHeader);
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from arrays
    const bearerToken = bearer[1];
    // Set the token
    //req.token = bearerToken;


    jwt.verify(bearerToken, 'secretkey', (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        // Next middleware
        next();
      }
    });

  } else {
    //Forbidden
    res.sendStatus(403);
  }

}

function verifyUser(user) {
  if (user.username == 'leon' && user.password == '123') {
    return true;
  }
  return false;
}
