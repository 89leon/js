function makeAjaxRequest(url,method = 'GET') {
  return method;
  //logic to make the request

}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');


//
function User(id){
  this.id = id;
}

function generateID(){
  return Math.random() * 99999;
}

function createAdminUser(user = new User(generateID())){
  user.admin = true;

  return user;
}

createAdminUser();
