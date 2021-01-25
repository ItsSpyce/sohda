import { HTTP_METHOD } from '../types';
import 'reflect-metadata';

const cleanClassNameRegex = /(Controller|Repository|Service)$/g;
const injectMetadataKey = Symbol('inject');

export const route = (pattern: string, method: HTTP_METHOD) => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) => {
  //
};

export const controller = (name?: string) => (ctor: Function) => {
  const basePath =
    name || ctor.name.replace(cleanClassNameRegex, '').toLowerCase();
};

export const repository = (name?: string) => (ctor: Function) => {
  const basePath =
    name || ctor.name.replace(cleanClassNameRegex, '').toLowerCase();
};

export const service = (name?: string) => (ctor: Function) => {
  const basePath =
    name || ctor.name.replace(cleanClassNameRegex, '').toLowerCase();
};

export const inject = () => {
  return Reflect.metadata(injectMetadataKey, '');
};

export const getInjection = (target: any, injectorName: string) => {
  //
};
