var products = [
  { name : 'cucumber' , type: 'vegetable' , quantity: 0 , price: 1},
  { name : 'banana' , type: 'fruit', quantity: 10 , price: 15},
  { name : 'orange' , type: 'fruit', quantity: 30 , price: 13},
  { name : 'celery' , type: 'vegetable', quantity: 3 , price: 5}
];


products.filter(function(product){
    return product.type === 'vegetable';
});

// Type is 'vegetable' , quantity is greater than 0 , prices less than 10
products.filter(function(product){
  return product.type === ' vegetable'
  && product.quantity > 0
  && product.price < 10
});


//Choosing when to filter
var post = { id:4 , title: 'new post'};
var comments = [
  { postId: 4 , content: 'awesome post' },
  { postId: 5 , content: 'good post' },
  { postId: 4 , content: 'some post' }
];

function commentsForPost(post , comments){
  return comments.filter(function(comment){
    return comment.postId === post.id;
  });
}
commentsForPost(post,comments);

// reject numbers
var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
  return array.filter(function(item){
      return !iteratorFunction(item);
      });
}
var lessThanFifteen = reject(numbers, function(number){
        return number > 15;
});
