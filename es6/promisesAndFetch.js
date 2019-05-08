//code execution in js
        -> 'unresolved' : waiting for osmething to finish...
promise -> 'resolved' something finished and it all went ok -> then(callback)
        -> 'reject' something finished and something went bad  -> catch(callback)


const promise = new Promise((resolve,reject)=>{
  resolve();
});

promise
.then(()=>{ console.log('finally finished!');})
.then(()=>{  console.log('i was also ran')})
.catch(()=>{console.log('something went wrong!')});


//async code with promises
const promise = new Promise((resolve,reject)=>{
  setTimout(()=>{
    resolve();
  },3000);

//or
  var request = new XHTMLRequest()
  //make request
  request.onload = () => {resolve()};
});

promise
.then(()=>{ console.log('finally finished!');})
.then(()=>{  console.log('i was also ran')})
.catch(()=>{console.log('something went wrong!')});

//Ajax Requests with fetch
url = "https://jsonplaceholder.typicode.com/posts/"
fetch(url)
.then.(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Bad',error));
