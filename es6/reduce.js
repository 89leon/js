var numbers = [10 , 20 , 30];
var sum = 0;

numbers.reduce(function(sum,number){
  return sum + number;
}, 0);

//another use
var primaryColors = [
{ color: 'red' },
{ color: 'green' },
{ color: 'blue' }
];

primaryColors.reduce(function(previous,primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);

//"()()()()" //balanced parens
//"(((())))"
//"(((("
//")("

function balancedParens(string){
  return !string.split("").reduce(function(previous,char){
    if (previous < 0){ return previous;}
    if (char === '('){ return ++previous;}
    if (char ===')'){  return --previous;}
    return previous;
  }, 0);
}
balancedParens("((((");



//
var desks = [
  { type: 'sitting'  },
  { type: 'standing' },
  { type: 'sitting'  },
  { type: 'sitting'  },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(total,desk) {
    if (desk.type === 'sitting'){ ++total.sitting; }
    if (desk.type === 'standing'){ ++total.standing; }
    return total;
}, { sitting: 0, standing: 0 });



//
function unique(array) {
    return array.reduce(function(newArray, currentNumber) {
        if (!newArray.find(function(element) { return element == currentNumber })) {
            newArray.push(currentNumber);
        }
        return newArray;
    }, []);
}
