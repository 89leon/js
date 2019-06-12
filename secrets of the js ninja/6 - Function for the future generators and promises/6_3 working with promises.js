//Promise is a placeholder for a value that we don't have now but will have later
//a guarantee that we'll eventually know the result of an asynchronous computation.
const ninjaPromise = new Promise((resolve,reject)=>{
  resolve("Hattori");
  //reject("An error resolving a promise!");
});

ninjaPromise.then(ninja =>
  {
  assert(ninja=== "Hattori", "We were promised Hattori!");
  },
  err =>
  {
    fail("there should not be an error!");
  }
);

 //151-152 example with setTimeout and immediate



 //real world promises
 function getJSON(url){
   return new Promise((resolve,reject)=> {
     const request = new XMLHttpRequest();
     request.open("GET",url);

     request.onload = function(){
       try {
         if (this.status === 200){
           resolve(JSON.parse(this.response));
         }
         else {
           reject(this.status + " " + this.statusText);
         }
       } catch (e){
         reject(e.message);
       }
     };
     request.onerror = function(){
       reject(this.status + " " + this.statusText);
     };
     request.send();
   });
 }
 getJSON("data/ninjas.json").then(ninjas => {
   assert(ninjas !== null , "Ninjas obtained!");
 }).catch(e => fail("should not be here!"));


 //chaining promises

 getJSON("data/ninjas.json")
 .then(ninjas => getJSON(ninjas[0].missionsUrl))
 .then(missions => getJSON(missions[0].detailsUrl))
 .then(mission => assert(mission !== null , "Ninjas Mission obtained!"))
 .catch(error => fail("An error has occured"));
