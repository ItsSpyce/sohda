import { RpcRequest, RpcResponse, RpcService } from './types';

export default class NotificationService implements RpcService {
  sendRequest<TRequest, TResponse>(
    request: RpcRequest<TRequest>
  ): Promise<RpcResponse<TResponse>> {
    return Promise.resolve({ id: 0 });
  }
}
