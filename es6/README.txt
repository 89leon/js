

ES6 Code => Babel => ES5 Code (Safe to run in your browser!).

Array Helper Methods
1.forEach
2.map //array to array of arrays
  //number -> [number]
  //number2 -> [number2]
  //...
3.filter //fruit
  //[fruit ,  -> true ---> [ fruit ,
  //vegetable , - false
  //fruit -> true     --->   fruit ]
  //]
4.find //meat
  //[fruit ,  -> iteratorFunction -> false
  //vegetable ,  -> iteratorFunction -> false
  //meat -> iteratorFunction -> true   ---> meat
  //]
5.every // ram > 16
 //[16-->true,4-->false,32-->true]--->true && false && true = false
6.some
//[16-->true,4-->false,32-->true]--->true || false || true = true
7.reduce
//[initial value --> iterator function on array --> result]
