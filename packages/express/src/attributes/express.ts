import { Router, Express } from 'express';
import ControllerFactory from '../factories/controller.factory';
import { ExpressInjectionState, HTTP_METHOD } from '../types';
import 'reflect-metadata';

const cleanClassNameRegex = /(Controller|Repository|Service)$/g;

const registeredControllers = new Map<string, ControllerFactory>();

export function seal(app: Express) {
  for (let controller of registeredControllers.values()) {
    controller.seal(app);
  }
}

const state: ExpressInjectionState = {
  routes: [],
  dependencies: [],
};

export const controller = (name?: string) => (ctor: Function) => {
  const basePath =
    name || ctor.name.replace(cleanClassNameRegex, '').toLowerCase();
  const router = Router({ caseSensitive: false });
  router.use((req, res, next) => {
    next();
  });
  const factory = new ControllerFactory(router, ctor, basePath);
  const { routes, dependencies } = state;
  // state.currentFactory = factory;
  registeredControllers.set(basePath, factory);
  for (let route of routes) {
    factory.useRoute(route);
  }
  state.routes = [];
};

export const route = (method: HTTP_METHOD, pattern: string = '/') => (
  target: any, // the controller instance
  propertyKey: string // the name of the field
) => {
  const { routes } = state;
  const routePattern = { method, pattern, propertyKey };
  routes.push(routePattern);
};

export const repository = (name?: string) => (ctor: Function) => {
  const basePath =
    name || ctor.name.replace(cleanClassNameRegex, '').toLowerCase();
};

export const service = (name?: string) => (ctor: Function) => {
  const basePath =
    name || ctor.name.replace(cleanClassNameRegex, '').toLowerCase();
};

export const inject = (ctor: Function) => {
  return function (target: any, propertyKey: string) {};
};

export const getInjection = (target: any, injectorName: string) => {
  //
};

export const authorize = () => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  //
  const session = target.session;
};
