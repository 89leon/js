/*
Create an index.js file, which we’ll use as the entry point for our server. At the top,
we’ll require the express module, built in bodyParser middlware, and set our app and port variables.
*/


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


const db = require('./queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);


/*
We’ll tell a route to look for a GET request on the root (/) URL, and return some JSON.
*/
app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


/*Now set the app to listen on the port you set.*/
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
