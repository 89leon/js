# Introduction
As a developer at bit you will be responsible for creating microservices that handle the orchestration of virtual machines in the cloud.
handling the lifecycle of each virtual machine and allowing the users to customize their vms.
this exercise will help you understand the tasks of a developer at bit and some of the daily challenges we face in everyday life.

# What you need to do
In this exercise We want to implement a microservice called the orchestrator which handles pools of workers.
whenever a request comes in the orchestrator will assign the task to a worker from the specified pool type in the request.
when the worker is finished with the requested task the result is returned to the client and the worker is terminated.

###
- the orchestrator is  for making sure that it always has the minimum amount of workers stated for each pool
- each worker can not spend more than 1 minute on a task

### WORKER
- worker has 3 methods to implement, start stop execute(all methods return promises).
  * start => pre warming phase - the worker boots up and is ready to receive tasks.
  * stop => the worker stops its current task and is shutdown.
  * execute => the worker executes the specified task it receive in the body of the request
- worker has the following properties (id, status)

### POOL
- a pool defines a set of workers of the same type.
- pool has 3 properties
  * minWorkers - minimum amount of workers for that pool has that is ready to receive tasks
  * maxWorkers - maximum amount of workers for that pool
  * maxWorkTimeMS(optional) - maximum number of ms the worker is allowed to work for before it is terminated



### Some basic principles:
- This mechanism should be easily readable, and easy to create new types of worker pools.
- You have to make sure to handle validation of requests.
- A Worker can throw and exception at any one of the phases
- Should be written in OOP.
- Use design patterns when needed.
- Make sure the code in simple and clean.
- Separate concerns.
- Testable code.

### Note
 - please upload the code to a private github repo and invite (amitgilad3@gmail.com)
 - optional means that you dont have do implement that logic - its just a bonus 
 - if you need to change the project structure its entirely up to you
 - if the are no free workers for a specific pool at the point of an incoming request send a relevant response
