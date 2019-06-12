import { Request as $Request } from 'express';

export type WorkRequest = {
    type: string,
    task: string
}

export type $ExpressRequest = $Request & {
body: WorkRequest
};
