var numbers = [1,2,3];

//number -> [number]
//number2 -> [number2]
//...
var doubled = numbers.map(function(number){
  return number * 2;
});

var cars = [
{ model: 'toyota' , price: 'cheap'},
{ model: 'bmw' , price: 'expensive'}

];
// get prices array
var prices = cars.map(function(){
  return car.price;
});


//pluck should accept an array and a string representing
//a property name and return an array containing
//that property from each object

function pluck(array, property) {
    return array.map(function(prop){
        return prop[property];
    });
}
