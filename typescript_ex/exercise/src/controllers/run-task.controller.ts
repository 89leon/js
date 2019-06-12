import { $ExpressRequest } from "../types";
import { Response } from 'express'
export function runTask(req: $ExpressRequest, res: Response) {
  console.log("req",req.body);
  return res.send({ payload: { exitCode: 0, result: "task done1" } });
}
