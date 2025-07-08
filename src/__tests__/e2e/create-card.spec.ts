import { GrecaleSDK } from "@src/corecards/sdk";

import {
  CardBrand,
  CardHolderType,
  CardType,
  ICreateCardDTO,
} from "@src/corecards/types/card.types";

import { logger } from "@src/greecale/utils";

import * as mocks from "@tests/mocks/";
import { settings } from "@tests/misc/settings";

const input = {
  cpf: "40628606001",
};

test("Add card for AccountType.PF", async () => {
  const sdk = new GrecaleSDK(settings);

  const payload: ICreateCardDTO = {
    account: { ...mocks.accountPF, cpf: input.cpf },
    brand: CardBrand.VISA,
    holder: {
      type: CardHolderType.HOLDER,
      name: "TESTE-01",
    },
    type: CardType.PHYSICAL,
  };

  const card = await sdk.card.create(payload);

  logger({ payload, card: JSON.stringify(card) });
  expect(true).toBeTruthy();
});
