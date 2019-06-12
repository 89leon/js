const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');

const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to Monogo
mongoose.connect(db , { useNewUrlParser: true})
.then(()=>console.log('MonogoDB Connected...'))
.catch( err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// BodyParser
app.use(express.urlencoded({ extended:false}));

// Express Session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
//  cookie: { secure: true }
}));
// Connect flash
app.use(flash());

// Global vars
app.use((req,res,next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
