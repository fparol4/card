import { GrecaleSDK } from "@src/corecards/sdk";

import { logger } from "@src/greecale/utils";
import { settings } from "@tests/misc/settings";

const input = {
  card: {
    idCorecard: "1014500000494001",
  },
};

test("SDK > Buscar um cartão", async () => {
  const sdk = new GrecaleSDK(settings);
  const card = await sdk.card.getOne({
    idCorecard: input.card.idCorecard,
    context: { conta: "494" },
  });
  logger({ card });
  expect(true).toBeTruthy();
});

test("SDK > Buscar um cartão com informações sensíveis", async () => {
  const sdk = new GrecaleSDK(settings);
  const card = await sdk.card.getOne({
    idCorecard: input.card.idCorecard,
    withSensitive: true,
  });
  logger({ card });
  expect(true).toBeTruthy();
});
