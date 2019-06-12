const express = require('express')
const mongoose = require('mongoose');

var bodyParser = require('body-parser')



const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
io.on('connection',()=> console.log('a user is connected'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//'mongodb://username:pass@ds257981.mlab.com:57981/simple-chat'
//mongodb://localhost:27017/message



const server = app.listen(3000,()=> {console.log(`server is srunning on port:`, server.address().port)})

const uuidv1 = require('uuid/v1');
app.use(express.static(__dirname));

const dbUrl =  'mongodb://localhost:27017/message';
mongoose.connect(dbUrl,{ useNewUrlParser: true },() => {
  console.log('mongodb connected');
})
//node-uuid
// Define schema
var Schema = mongoose.Schema;
var SomeModelSchema = new Schema({
  _id:{ type: String , default: uuidv1()},
  name: String,
  message: String
});
var Message = mongoose.model('messages',SomeModelSchema)



app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.post('/messages', (req, res) => {

  var message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
        console.log(req.body);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})
