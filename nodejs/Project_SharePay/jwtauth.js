//How to include
//router.use(require('../jwtauth'));

// JWT Verify
function jwtVerify(req, res, next) {
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
    //Forbidden if not base url
    if (req.originalUrl == '/'){
      next();
    }
    else{
      res.sendStatus(403);
    }
  }

}

module.exports = jwtVerify;
