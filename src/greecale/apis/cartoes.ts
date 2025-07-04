import { AxiosInstance } from "axios";
import { APICrypt } from "./crypt";

export class APICartoes {
  constructor(
    public client: AxiosInstance,
    public crypto: APICrypt,
  ) {
    this.crypto = new APICrypt(client);
  }

  public async getCardByNumber() {}
}
