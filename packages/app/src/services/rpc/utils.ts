import { RpcRequest } from './types';

export function doesMessageHaveId(request: RpcRequest<any>): boolean {
  return request && typeof request.id === 'number';
}
