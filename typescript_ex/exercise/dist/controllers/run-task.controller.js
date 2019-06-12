"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function runTask(req, res) {
    console.log("req", req.body);
    return res.send({ payload: { exitCode: 0, result: "task done1" } });
}
exports.runTask = runTask;
//# sourceMappingURL=run-task.controller.js.map