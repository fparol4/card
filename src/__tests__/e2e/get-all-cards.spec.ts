import { GrecaleSDK } from "@src/corecards/sdk";
import { CardBrand, CardHolderType, CardType, ICardDTO } from "@src/corecards/types/card.types";
import { IAccountDTO } from "@src/corecards/types/account.types";
import { logger } from "@src/greecale/utils";
import * as mocks from "@tests/mocks/";
import { settings } from "@tests/misc/settings";

// Função simples para gerar um CPF aleatório (não garante validade real, mas evita duplicidade para teste)
function generateRandomCpf() {
  return String(Math.floor(10000000000 + Math.random() * 90000000000));
}

describe("SDK > Buscar todos os cartões de um usuário", () => {
  let card1: ICardDTO;
  let account: IAccountDTO;

  beforeAll(async () => {
    const sdk = new GrecaleSDK(settings);
    const randomCpf = generateRandomCpf();
    account = { ...mocks.accountPF, cpf: randomCpf };

    // Cria o cartão titular via API
    const payload1 = {
      account,
      brand: CardBrand.VISA,
      holder: {
        type: CardHolderType.HOLDER,
        name: "USER-TITULAR",
      },
      type: CardType.PHYSICAL,
    };
    card1 = await sdk.card.create(payload1);
  });

  test("Deve buscar todos os cartões do usuário", async () => {
    const sdk = new GrecaleSDK(settings);
    const payloadGetAll = {
      account,
      cards: [
        { idCorecard: card1.idCorecard },
      ],
    };
    const cards = await sdk.card.getAll(payloadGetAll);
    logger({ payloadGetAll, cards });
    expect(cards.length).toBe(1);
    expect(cards[0].idCorecard).toBe(card1.idCorecard);
  });
}); 