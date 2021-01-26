import Express, { NextFunction, Response } from 'express';
export interface RequestWithSession extends Express.Request {
  session?: Session;
}

export type Session = {
  authToken?: string;
};

export enum HTTP_METHOD {
  GET,
  POST,
  PUT,
  DELETE,
}

export class Controller {
  [name: string]: any;
}

export type RouteArgs<T = unknown> = T & {
  request: RequestWithSession;
  response: Response;
  session: Session;
  next: NextFunction;
};
