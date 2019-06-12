"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class pool {
    //workersArray : [number,string] = [];//create type Validation
    constructor(minWorkers, maxWorkers, maxWorkTimeMS) {
        this.workersArray = [];
        this.minWorkers = minWorkers;
        this.maxWorkers = maxWorkers;
        this.maxWorkTimeMS = maxWorkTimeMS;
    }
    insertWorker(worker) {
        this.workersArray.push([worker.type, worker]); //change this also
    }
    getMinWorkers() {
        return this.minWorkers;
    }
    getMaxWorkers() {
        return this.maxWorkers;
    }
    getMaxWorkTimeMS() {
        return this.maxWorkTimeMS;
    }
}
//# sourceMappingURL=pool.js.map