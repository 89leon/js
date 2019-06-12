import { Request as $Request } from 'express';
export declare type WorkRequest = {
    type: string;
    task: string;
};
export declare type $ExpressRequest = $Request & {
    body: WorkRequest;
};
