export type SDKServerCredentials = {
  key: string;
  secret: string;
};

export type SDKParams = {
  baseURL: string;
  credentials: SDKServerCredentials;
};

export type SDKRequestOptions = {
  requestId?: string;
  token?: string;
};

export type SDKAuthResDTO = {
  token: string;
  expireAt: string;
};

export const CRIPT_ALGORITHM = "aes-128-cbc";

export type AESKey = {
  key: Buffer;
  iv: Buffer;
};

