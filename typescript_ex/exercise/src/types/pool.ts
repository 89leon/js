import workerClass from "../types/worker";

class pool {
    

    minWorkers:number;
    maxWorkers:number;
    maxWorkTimeMS:number;
    workersArray:Array<[number, any]> = [];

    //workersArray : [number,string] = [];//create type Validation

    constructor(minWorkers:number,maxWorkers:number,maxWorkTimeMS:number){
        this.minWorkers = minWorkers;
        this.maxWorkers = maxWorkers;
        this.maxWorkTimeMS = maxWorkTimeMS;
    }
    insertWorker(worker:any){
        this.workersArray.push([worker.type,worker]); //change this also
    }

    getMinWorkers():number{
        return this.minWorkers;
    }
    getMaxWorkers():number{
        return this.maxWorkers;
    }
    getMaxWorkTimeMS():number{
        return this.maxWorkTimeMS;
    }
}