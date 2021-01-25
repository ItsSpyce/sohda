import Express from 'express';

export interface Request<T extends Session = { authToken: null }>
  extends Express.Request {
  session?: T;
}

export type Session<T = any> = T & {
  authToken?: string;
};

export enum HTTP_METHOD {
  GET,
  POST,
  PUT,
  DELETE,
}
