function createBookShop(inventory){
  return {
    inventory, //es 5 : inventory : inventory,
    inventoryValue(){
      return this.inventory.reduce((total,book) => total + book.price , 0);
    },
    /*
    inventoryValue : function(){
      return this.inventory.reduce((total,book) => total + book.price , 0);
    },
    */
    priceForTitle(title){
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
{ title: 'Harry Potter' , price: 10},
{ title: 'Eloquent Javascript' , price: 15}

];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');


////
function saveFile(url,data){
  $.ajax({ method: 'POST' , url , data});
}
const url = 'http://fileupload.com';
const data = { color: 'black' };

saveFile(url, data);
