const express = require('express');
const router = express.Router();








router.get('/', (req, res) => res.render('welcome'));//res.json({  message : "Welcome to the server!"  }));

//FORMAT OF TOKEN
// Authorization: Brearer <access_token>


module.exports = router;
