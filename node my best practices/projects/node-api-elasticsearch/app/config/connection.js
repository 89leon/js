const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  "mongodb://localhost:27017/message"

});

module.exports = client;
