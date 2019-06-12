"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_provider_1 = __importDefault(require("./routes/route-provider"));
//declare out start up logic
const appStart = () => {
    const app = express_1.default();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    //setup our features (of which there is one)
    route_provider_1.default(app);
    //setup our view engine
    //start the app
    app.listen('3002', () => { console.log('Server listening on port 3002'); });
};
//start app
appStart();
//# sourceMappingURL=index.js.map