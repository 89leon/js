const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// User model
const User = require('../models/User');
// Login Page
router.get('/login', (req, res) => res.render('login'));// res.json({  message : "Welcome to login page!"  }));
// Register page
router.get('/register', (req, res) => res.render('register'));//res.json({  message : "Welcome to register page!"  }));

// Register Handle
router.post('/register', (req,res)=>{
  const { name , email , password, password2 } = req.body;
  let errors = [];

  // Check required fields
  if (!name || !email || !password || !password2){
    errors.push({ msg : 'Please fill all fields'});
  }
  // Check password match
  if (password != password2){
    errors.push({msg : 'Passwords do not match'});
  }
  // Check passwords length
  if (password.length < 6){
    errors.push({msg : 'Password should be at least 6 characters'});
  }
  if (errors.length > 0){
    res.render('register',{
      errors,name,email,password,password2
    });
  } else {
    // Validation passed
    User.findOne({email:email}).then(user => {
      if (user){
        // User exists
        errors.push({msg : 'Email already registered'});
        res.render('register',{
          errors,name,email,password,password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });
        // Hash Password
        bcrypt.genSalt(10,(err, salt) => bcrypt.hash(newUser.password,  salt , (err, hash) => {
          if (err) throw err;
          // Set password to hashed
          newUser.password = hash;
          // Save user
          newUser.save().then(user => {
            req.flash('success_msg', 'You are now registered and can log in!');
            res.redirect('/users/login');
          }).catch(err => console.log(err));
        }))
      }
    });
  }



});
module.exports = router;
