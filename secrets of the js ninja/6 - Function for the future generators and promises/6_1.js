//Task is to implement a functionality that lets users get details about the highest-rated mision done by the most popular ninja.
//stored on a remote server
//encoded in JSON



try {
  var ninjas = syncGetJSON("ninjas.json");
  var missions = syncGetJSON(ninja[0].missionsUrl);
  var missionDetails = syncGetJSON(missions[0].detailsUrl);

}
catch (e){
  // Oh no , weren't able to get the missions details
}
//Getting data from a server is a long-running operation , , and js relies on a single-threaded execution model , we've just blocked our UI until the long-running operations finish.
//this leads to unresponsive applications and dissapointed users
//to solve this problem we can rewrite it with callback , which will be invoked when a task finishes,without bocking the UI:
getJSON("ninjas.json",function(err,ninjas){
  if(err){
    console.log("Error fetching list of ninjas",err);
    return;
  }
});
//...... same for other functions.

//this code is a bit messy and it adds a lot of error-handling code.
//this is where generators and promises comes in ..we can turn the non-blockg but awkward callback code into something elegant:
async(function*(){
try {
  const ninjas = yield getJSON("ninjas.json");
  //....same for other functions.
}
catch(e){
  // Oh no , weren't able to get the missions details
}
});
