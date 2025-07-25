import { GrecaleSDK } from "@src/corecard/sdk";
import settings from "./grecale_hlg.json";

export const getTestingSDK = () => {
  return new GrecaleSDK(settings);
};
