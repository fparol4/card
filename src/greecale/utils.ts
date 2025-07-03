import { randomUUID } from "crypto";
import { SDKRequestOptions } from "./types";

export const logger = console.log;

export const requestOptions = (options?: SDKRequestOptions) => {
  return {
    headers: {
      "Fastpays-Request-Id": options?.requestId ?? randomUUID(),
      Authorization: `Bearer ${options?.token}`,
    },
  };
};
