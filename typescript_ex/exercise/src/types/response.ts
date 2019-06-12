import { Response } from "express";

export type taskResponse = {
  exitCode: number;
  result: string;
};

export type $ExpressResponse = Response & {
  payload: taskResponse;
};
