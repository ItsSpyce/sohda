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

export type RoutePattern = {
  method: HTTP_METHOD;
  pattern: string;
  propertyKey: string;
};

export type DependencyPattern = {
  dependency: Function;
  propertyKey: string;
};

export type ExpressInjectionState = {
  routes: RoutePattern[];
  dependencies: DependencyPattern[];
};
