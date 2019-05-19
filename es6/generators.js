
//generator is a function that  can be entered and exited multiple times
const colors = ['red', 'green', 'blue'];

for (let color of colors){

}


function* numbers(){
  yield;
}
console.log(numbers());

const gen = numbers();
gen.next();
gen.next();
