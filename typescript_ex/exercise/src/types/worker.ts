export default class Worker {
    id: number;
    
    constructor(newId: number) {
          this.id = newId;
      }
    start(){
        return "Worker #"+ this.id + " started the task";
    }
    stop(){
        return "Worker #"+ this.id + " finished the task";
    }
    execute(){
        return "Worker #"+ this.id + " executing the task";
    }

  }