//js has prototype inheritance

//prototypal inheritance
function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function(){
  return 'vroom';
}
const car = new Car({ title: 'Focus'});
car.drive();
car;






function Toyota(options){
  this.color = options.color;
}
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() { return 'beep';};

const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
toyota;
toyota.drive();
toyota.honk();

//REFACTORING WITH CLASSES
class Car {
  constructor(options){
    this.title = options.title;
  },
  drive(){ return 'vroom';}
}

const car = new Car({} title:'Toyota');
car;
car.drive();

//Extending Behavior CLASSES


class Toyota extends Car {
  constructor(options){
    super(options); // to use card constructor method. Car.constructor()
    this.color = color;
  },

  honk(){return 'beep';}
}

const toyota = new Toyota({ color: 'red' , title: 'totototototototoyota'});
toyota.honk();
