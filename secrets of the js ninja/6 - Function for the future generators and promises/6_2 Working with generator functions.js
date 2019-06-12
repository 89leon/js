//6.2 Working with generator functions
//Using a generator function to generate a sequence of values
function * WeaponGenerator(){//definse agenerator function by putting * after the function keyword
  yield "Katana";             //
  yield "Wakizashi";          //generates individual values by using the new yield keyword
  yield "Kusarigama";         //
}

for (let weapon of WeaponGenerator()) {//consumes the generated sequence with the new for-of loop.
  assert (weapon !== undefined,weapon);
}

//Controlling the generator through the iterator object
//Making a call to a generator does not mean that he body of the generator function will be executed.
//Insted , an iterator object is created , an object through which we can communicate with the generator.
//ajustment of previous code:

function * WeaponGenerator(){
  yield "Katana";             //
  yield "Wakizashi";
}

const weaponsIterator = WeaponGenerator();
const result1 = weaponsIterator.next();
assert(typeof result1 === "object" && result1.value = "Katana" && !result1.done, "Katana received");

const result2 = weaponsIterator.next();
//....same for another results

//Iterating over generator results with a while loop
 function * WeaponGenerator(){
   yield "Katana";             //
   yield "Wakizashi";
 }
 const weaponsIterator = WeaponGenerator();
 let item;
 while(!(item = weaponsIterator.next()).done){
   assert(item !== null , item.value);
 }


 //continue from page 133 Using yield* to delegate to another generator
