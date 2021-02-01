import { NextFunction, Router, Response, Express } from 'express';
import {
  Controller,
  DependencyPattern,
  HTTP_METHOD,
  RequestWithSession,
  RoutePattern,
} from '../types';

export default class ControllerFactory {
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
    const controller = this.controllerCtr.bind(this.controllerCtr, {});
    const instance = new controller();
    return instance;
  }

  private bindToInstance(name: string, value: any) {
    if (!this.controllerCtr.prototype[name]) {
      Object.defineProperty(this.controllerCtr.prototype, name, {
        get: () => value,
      });
    }
  }

  private injectFields() {
    this.injectedFields.forEach((ctor, name) => {
      if (!this.controllerCtr.prototype[name]) {
        const instance = ctor.bind(ctor, {});
        Object.defineProperty(ctor.prototype, name, {
          get: () => instance,
        });
      }
    });
  }

  private handlePath(methodName: string) {
    const factory = this;
    return function (
      request: RequestWithSession,
      response: Response,
      next: NextFunction
    ) {
      factory.bindToInstance('request', request);
      factory.bindToInstance('response', response);
      factory.bindToInstance('session', request.session);
      factory.bindToInstance('ok', () => response.sendStatus(200));
      factory.bindToInstance('notFound', () => response.sendStatus(404));
      factory.bindToInstance('error', (err: string) =>
        response.status(500).send({ err })
      );
      const controllerInstance = factory.buildController();

      const fn = controllerInstance[methodName];
      if (fn) {
        const result = fn(request.params);
      }
      next();
    };
  }

  useRoute({ method, pattern, propertyKey }: RoutePattern) {
    switch (method) {
      case HTTP_METHOD.GET:
        this.router.get(`${pattern}`, this.handlePath(propertyKey));
        break;
      default:
        break;
    }
  }

  useDependency({ dependency, propertyKey }: DependencyPattern) {
    this.injectedFields.set(propertyKey, dependency);
  }

  seal(app: Express) {
    app.use(`/${this.namespace}`, this.router);
  }
}
