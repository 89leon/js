import { Response } from "express";
export declare type taskResponse = {
    exitCode: number;
    result: string;
};
export declare type $ExpressResponse = Response & {
    payload: taskResponse;
};
