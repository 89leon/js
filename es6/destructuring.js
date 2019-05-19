var expense = {
  type: 'Business',
  amount: '$45 USD'
};

var type = expense.type;
var amount = expense.amount;

//ES6

const { type } = expense;
const { amount } = expense;

// or
const { type , amount } = expense;



//
var savedFile = {
  extension: '.jpg',
  name: 'repost',
  size: 14040

};

function fileSummary({ name ,extension , size}, {color}){
  //return `The file ${file.name},${file.extension} is of size ${file.size}`;
  return `The file ${name},${extension} is of size ${size}`;
}

fileSummary(savedFile, {color: 'red'});


//Destructuring arrays
const companies = [
  'Google',
  'Facebook',
  'Uber',
  'GetTaxi'

];
const [ name , name2 , name3 , name4 ,name5/*will be undefined bcz there is 4 companeis*/] = companies;


//another test
const [ name ] = companies;
const firstCompany = comapnies[0];
const [ length ] = companies;
const { length } = companies;


const Google = { locations: ['1','2','3']};

const { locations: [location]} = Google;
location;

//use of it

function signup({password , username , emnail dateOfBirth , city });
const user = { username: 'myname'........};
signup(user);

//another

const points = [ [4,5],[10,1],[0,40]];

//[
//  {x: 4, y:5},
//  {x: 10, y:1},
//  { x: 0, y:40}
//]

points.map(([ x, y]) => {
  return { x, y };
});


//another

const numbers = [1, 2, 3];

const double = ([number, ...rest]) => !number ? [] : [number * 2, ...double(rest)];
