"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const sinon = __importStar(require("sinon"));
const run_task_controller_1 = require("./run-task.controller");
describe("run task controller", function () {
    it("returns result of task execution", async function () {
        let req = {};
        let res = {
            send: sinon.stub()
        };
        await run_task_controller_1.runTask(req, res);
        sinon.assert.calledWith(res.send, {
            payload: { exitCode: 0, result: "task done" }
        });
    });
});
//# sourceMappingURL=run-task.controller.spec.js.map