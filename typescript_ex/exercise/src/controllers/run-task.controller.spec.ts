import "mocha";
import * as sinon from "sinon";
import { runTask } from "./run-task.controller";
import { $ExpressResponse, $ExpressRequest } from "../types";

describe("run task controller", function() {
  it("returns result of task execution", async function() {
    let req: Partial<$ExpressRequest> = {};

    let res: Partial<$ExpressResponse> = {
      send: sinon.stub()
    };

    await runTask(<$ExpressRequest>req, <$ExpressResponse>res);

    sinon.assert.calledWith(res.send as sinon.SinonStub, {
      payload: { exitCode: 0, result: "task done" }
    });
  });
});
