import { Connector } from '../..';

export default class AppConnector implements Connector {
  constructor() {}
  send(channel: string, data: any): void {
    throw new Error('Method not implemented.');
  }
  on(channel: string, listener: (data: any) => void): void {
    throw new Error('Method not implemented.');
  }
}
