var computers = [
{ name: 'Apple' , ram: 24},
{ name: 'Compaq' , ram: 4},
{ name: 'Acer' , ram: 32},
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

computers.every(function(computer){
  return computer.ram > 16;
});

computers.some(function(computer){
  return computer.ram > 16;
});

//real use example -> form validation
function Field(value){
  this.value = value;
}

Field.prototype.validate = function (){
  return this.value.length > 0;
}

var username = new Field("username");
var password = new Field("my_password");

var fields = [username , password];
var formIsValid = fields.every(function(field){
  return field.validate();
});
if (forIsvalid){
  //allow user to submit!
}
else {
  //show an error message
}
