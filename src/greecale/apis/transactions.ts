import { AxiosInstance } from "axios";
import { requestOptions } from "../utils";
import { SDKError } from "@src/shared/error";
import { ITransferByProxyDTO, SDKRequestOptions } from "../types";

export class APITransaction {
  constructor(public client: AxiosInstance) {}

  public async transferByProxy(
    payload: ITransferByProxyDTO,
    options?: SDKRequestOptions,
  ) {
    try {
      const { data } = await this.client.post<any>(
        `/transacoes/transfere/${payload.idProxy}`,
        payload.body,
        requestOptions(options),
      );

      return data;
    } catch (error) {
      throw new SDKError("Unauthorized", error);
    }
  }
}
