import { GrecaleSDK } from "@src/corecards/sdk";
import { CardBrand, CardHolderType, CardType, CardStatus } from "@src/corecards/types/card.types";
import { logger } from "@src/greecale/utils";
import * as mocks from "@tests/mocks/";
import { settings } from "@tests/misc/settings";

// Função simples para gerar um CPF aleatório (não garante validade real, mas evita duplicidade para teste)
function generateRandomCpf() {
  return String(Math.floor(10000000000 + Math.random() * 90000000000));
}

let card: any;

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
});

describe("SDK > Alterar status de um cartão", () => {
  const statuses = [
    { status: CardStatus.ACTIVE, name: "ACTIVE" },
    { status: CardStatus.BLOCKED, name: "BLOCKED" },
    { status: CardStatus.CREATING, name: "CREATING" },
  ];

  statuses.forEach(({ status, name }) => {
    test(`Deve alterar status para ${name} e verificar`, async () => {
      const sdk = new GrecaleSDK(settings);
      const payloadChange = {
        card: {
          idCorecard: card.idCorecard,
          status: card.status,
          context: card.context || {},
          createdAt: card.createdAt,
          updatedAt: card.updatedAt,
        },
        newStatus: status,
      };
      const result = await sdk.card.changeStatus(payloadChange);
      logger({ payloadChange, result });
      expect(result).toBe(true);
      // Buscar o cartão novamente e verificar o status
      const cardAfter = await sdk.card.getOne({ idCorecard: card.idCorecard });
      expect(cardAfter.status).toBe(status);
    });
  });

  test("Deve retornar erro ao tentar alterar status para CANCELED", async () => {
    const sdk = new GrecaleSDK(settings);
    const payloadChange = {
      card: {
        idCorecard: card.idCorecard,
        status: card.status,
        context: card.context || {},
        createdAt: card.createdAt,
        updatedAt: card.updatedAt,
      },
      newStatus: CardStatus.CANCELED,
    };
    let error;
    try {
      await sdk.card.changeStatus(payloadChange);
    } catch (err: any) {
      error = err;
      logger({ payloadChange, error });
    }
    expect(error).toBeDefined();
  });
}); 