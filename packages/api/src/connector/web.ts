import { Connector } from '../..';

// web doesn't have access to native modules, so we have to create our own kind of event emitter
export default class WebConnector implements Connector {
  constructor() {}
  send(channel: string, data: any): void {
    throw new Error('Method not implemented.');
  }
  on(channel: string, listener: (data: any) => void): void {
    throw new Error('Method not implemented.');
  }
}
