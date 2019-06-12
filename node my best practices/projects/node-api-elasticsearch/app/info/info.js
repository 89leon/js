var client = require('../config/connection.js');

client.cluster.health({},function(err,resp,status) {
  console.log("-- Client Health --",resp);
});
