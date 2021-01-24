import { RpcRequest } from './types';

export function doesMessageHaveId(request: RpcRequest): boolean {
  return request && typeof request.id === 'number';
}
