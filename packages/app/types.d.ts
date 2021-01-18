export type Config = {
  exitOnClose: boolean;
};

export type IpcMessageResponse<T = string> = {
  wasSuccessful: boolean;
  data: T;
};
