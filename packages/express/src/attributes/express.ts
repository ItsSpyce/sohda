import { NextFunction, Response, Router, Express } from 'express';
import 'reflect-metadata';
import { Controller, HTTP_METHOD, RequestWithSession } from '../types';
import { getParamNames } from '../utils';

const cleanClassNameRegex = /(Controller|Repository|Service)$/g;
const injectMetadataKey = Symbol('inject');

class ControllerFactory {
  readonly router: Router;
  readonly controllerCtr: Function;
  readonly namespace: string;
  readonly injectedFields: Map<string, Function>;

  constructor(router: Router, controllerCtr: Function, namespace: string) {
    this.router = router;
    this.controllerCtr = controllerCtr;
    this.namespace = namespace;
    this.injectedFields = new Map<string, Function>();
  }

  addInjectedField(fieldName: string, ctor: Function) {
    this.injectedFields.set(fieldName, ctor);
  }

  private buildController(): Controller {
    const controller = this.controllerCtr.bind(this.controllerCtr);
    const instance = new controller();
    return instance;
  }

  private handlePath(methodName: string) {
    const factory = this;
    return function (
      request: RequestWithSession,
      response: Response,
      next: NextFunction
    ) {
      console.log(`Handling ${methodName} of ${factory.controllerCtr.name}`);
      const controllerInstance = factory.buildController();
      const fn = controllerInstance[methodName];
      fn({
        ...request.params,
        request,
        response,
        next,
        session: request.session,
      });
    };
  }

  use({ method, pattern, propertyKey }: RoutePattern) {
    switch (method) {
      case HTTP_METHOD.GET:
        this.router.get(`${pattern}`, this.handlePath(propertyKey));
        break;
      default:
        break;
    }
  }

  seal(app: Express) {
    app.use(`/${this.namespace}`, this.router);
  }
}

const registeredControllers = new Map<string, ControllerFactory>();

export function seal(app: Express) {
  for (let controller of registeredControllers.values()) {
    controller.seal(app);
  }
}

type RoutePattern = {
  method: HTTP_METHOD;
  pattern: string;
  propertyKey: string;
};

type ExpressInjectionState = {
  routes: RoutePattern[];
};

const state: ExpressInjectionState = {
  routes: [],
};

type ClassConstructor = {
  (p: Partial<any>): any;
};

export const controller = (name?: string) => (ctor: Function) => {
  const basePath =
    name || ctor.name.replace(cleanClassNameRegex, '').toLowerCase();
  const router = Router({ caseSensitive: false });
  router.use((req, res, next) => {
    console.log(Date.now());
    next();
  });
  const factory = new ControllerFactory(router, ctor, basePath);
  const { routes } = state;
  console.log(`Created controller ${basePath}`);
  // state.currentFactory = factory;
  registeredControllers.set(basePath, factory);
  for (let route of routes) {
    factory.use(route);
  }
  state.routes = [];
};

export const route = (method: HTTP_METHOD, pattern: string = '/') => (
  target: any, // the controller instance
  propertyKey: string, // the name of the field
  descriptor: PropertyDescriptor // the function body
) => {
  //
  const handler = descriptor.value as Function;
  const { routes } = state;
  console.log(`Created route ${pattern} for ${propertyKey}`);
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
  return Reflect.metadata(injectMetadataKey, '');
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
