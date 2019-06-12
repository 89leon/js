"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const run_task_controller_1 = require("../controllers/run-task.controller");
const router = express_1.Router();
router.get('/', run_task_controller_1.runTask);
router.post('/', run_task_controller_1.runTask);
const createRoutes = (app) => {
    app.use('/', router);
    return app;
};
exports.default = createRoutes;
//# sourceMappingURL=route-provider.js.map