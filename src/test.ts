import { SDKClient } from "./greecale/client";
import { logger } from "./greecale/utils";

import keys from "./greecale/misc/keys.json";

(async () => {
  const client = new SDKClient({
    baseURL: "https://apis-uat.fastpays.com.br/api",
    credentials: keys["produto-50"],
  });

  const token = await client.authenticate();
  const options = { token };
  logger({ token });

  // --- crypto ---
  // const aesKey = await client.crypto.getAESKey(options);
  // logger({ aesKey });

  const toEncrupt = "2121";
  const encrypted = await client.crypto.encrypt(toEncrupt, options);
  // logger({ encrypted });
  //
  // const encrypted = "3893B8CB6E567A5A23AE31D74322C4A9";
  // const decrypted = await client.crypto.decrypt(encrypted, options);
  // logger({ decrypted });

  // --- portador (card-holder) ---
  // newPortadorDTO.cpf = "24406570004";
  // const novo_portador = await client.portador.add(newPortadorDTO, options);
  // logger({ novo_portador });

  // const portador = await client.portador.getById("1014500000226001", options);
  // logger({ portador });

  // const transfere = await client.transactions.transferByProxy({
  //   idProxy: "1014500000226001",
  //   body: {
  //     linhaDestino: 100,
  //     linhaOrigem: 100,
  //     valorTransferencia: 200,
  //   },
  // });
  //

  const cartao = await client.cartao.getByProxy("1014500000245001", true, {
    token,
  });

  logger({ cartao });
})();
