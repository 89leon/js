function addNumbers(...numbers) {
  return numbers.reduce((sum,number) => { return sum + number }, 0);
}

addNumbers(1,2,3,4,5,6);



//
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['black' , 'white'];

['blue',...defaultColors , ...userFavoriteColors];

//
function validateShoppingList(...items){
  if (items.indexOf('milk') < 0){
    return ['milk',...items];
  }
  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');
