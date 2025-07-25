import { GrecaleSDK } from "@src/corecard/sdk";
import settings from "./grecale_hlg.json";

export const getSDKTesting = () => {
  return new GrecaleSDK(settings);
};
