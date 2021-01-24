export type RpcRequest<T> = {
  id: number;
  method: string;
  params: T;
  resource?: string;
};

type PartialResponseResult = {
  _type: string;
  resourceId: string;
};

type RpcError = {
  code: RpcErrorCode;
  message: string;
  data?: any;
};

export type RpcResponse<T> = {
  id: number;
  result?: (PartialResponseResult & T)[];
  error?: RpcError;
};

export interface RpcService {
  sendRequest<TRequest, TResponse>(
    request: RpcRequest<TRequest>
  ): Promise<RpcResponse<TResponse>>;
}

export enum RpcErrorCode {
  PARSE_ERROR = -32700,
  INVALID_REQUEST = -32600,
  METHOD_NOT_FOUND = -32601,
  INVALID_PARAMS = -32602,
  INTERNAL_ERROR = -32603,
  SERVER_ERROR = -32000,
}
