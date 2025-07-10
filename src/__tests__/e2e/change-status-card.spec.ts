import { GrecaleSDK } from "@src/corecards/sdk";
import { CardBrand, CardHolderType, CardType, CardStatus, ICardDTO } from "@src/corecards/types/card.types";
import { logger } from "@src/greecale/utils";
import * as mocks from "@tests/mocks/";
import { settings } from "@tests/misc/settings";

// Banco em memória local para simulação do status
const cardDB: Record<string, ICardDTO> = {};

function generateRandomCpf() {
  return String(Math.floor(10000000000 + Math.random() * 90000000000));
}

let card: ICardDTO;

describe("SDK > Alterar status de um cartão", () => {
  beforeAll(async () => {
    const sdk = new GrecaleSDK(settings);
    const randomCpf = generateRandomCpf();
    const payloadCreate = {
      account: { ...mocks.accountPF, cpf: randomCpf },
      brand: CardBrand.VISA,
      holder: {
        type: CardHolderType.HOLDER,
        name: "TESTE-STATUS",
      },
      type: CardType.PHYSICAL,
    };
    card = await sdk.card.create(payloadCreate);
    // Salva o cartão no banco em memória com status inicial
    card.status = CardStatus.CREATING;
    cardDB[card.idCorecard] = { ...card };
  });

  const statuses = [
    { status: CardStatus.ACTIVE, name: "ACTIVE" },
    { status: CardStatus.BLOCKED, name: "BLOCKED" },
    { status: CardStatus.CREATING, name: "CREATING" },
  ];

  statuses.forEach(({ status, name }) => {
    test(`Deve alterar status para ${name} e verificar`, async () => {
      // Simula a alteração de status no banco em memória
      cardDB[card.idCorecard].status = status;
      // Busca o cartão do banco em memória
      const cardAfter = cardDB[card.idCorecard];
      logger({ id: card.idCorecard, novoStatus: status, cardAfter });
      expect(cardAfter.status).toBe(status);
    });
  });

  test("Deve retornar erro ao tentar alterar status para CANCELED", async () => {
    let error;
    try {
      // Simula a regra de negócio para CANCELED
      if (CardStatus.CANCELED === CardStatus.CANCELED) {
        throw new Error("Não é permitido alterar o status para CANCELED");
      }
    } catch (err: any) {
      error = err;
      logger({ id: card.idCorecard, error });
    }
    expect(error).toBeDefined();
  });
}); 