Rule 1 - Organize your Files Around Features, Not Roles
you can structure your Node.js applications around product features / pages / components. It makes understanding a lot easier:

// DO
.
├── product
|   ├── index.js
|   ├── product.js
|   └── product.hbs
├── user
|   ├── index.js
|   ├── user.js
|   └── user.hbs



Rule 2 - Don't Put Logic in index.js Files
Use these files only to export functionality, like:

// product/index.js
var product = require('./product')

module.exports = {
  create: product.create
}

Rule 3 - Place Your Test Files Next to The Implementation
Put your additional test files to a separate test folder to avoid confusion.
.
├── test
|   └── setup.spec.js
├── product
|   ├── index.js
|   ├── product.js
|   ├── product.spec.js
|   └── product.hbs
├── user
|   ├── index.js
|   ├── user.js
|   ├── user.spec.js
|   └── user.hbs

Rule 4 - Use a config Directory
To place your configuration files, use a config directory.

.
├── config
|   ├── index.js
|   └── server.js
├── product
|   ├── index.js
|   ├── product.js
|   ├── product.spec.js
|   └── product.hbs

Rule 5 - Put Your Long npm Scripts in a scripts Directory
Create a separate directory for your additional long scripts in package.json

.
├── scripts
|   ├── syncDb.sh
|   └── provision.sh
├── product
|   ├── index.js
|   ├── product.js
|   ├── product.spec.js
|   └── product.hbs
