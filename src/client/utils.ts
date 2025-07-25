import { randomUUID } from "crypto";
import type { SDKRequestOptions } from "./types/common";

export const logger = console.log;

export const requestOptions = (options?: SDKRequestOptions) => {
  return {
    headers: {
      "Fastpays-Request-Id": options?.requestId ?? randomUUID(),
      Authorization: `Bearer ${options?.token}`,
    },
  };
};

export const removeAttributes = (payload: any, attributes: string[]) => {
  attributes.forEach((k) => delete payload[k]);
  return payload;
};
