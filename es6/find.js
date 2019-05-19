var users = [
  { name: 'Leon'},
  { name: 'Emily'},
  { name: 'Larisa'},
  { name: 'Alexandra'}
 ];

 users.find(function(user){
   return user.name === 'Alexandra';
 });


 // find with objects
 function Car(model){
   this.model = model;
 }

 var cars = [
   new Car('Toyota'),
   new Car('bmw'),
   new Car('kia')
 ];

 cars.find(function(car){
   return car.model === 'bmw';
 });




 //findWhere
 var ladders = [{ id: 1,height: 20 }, { id: 3,height: 25 }];

 function findWhere(array, criteria) {
  const propName = Object.keys(criteria)[0];
  return array.find(function(item){
      return item[propName] === criteria[propName];
    });
}

findWhere(ladders, { height: 25 });
