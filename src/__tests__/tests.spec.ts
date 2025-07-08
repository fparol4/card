import { CorecardAccountService } from "@src/corecards/account.service";
import { ICreateAccountDTO, IGetAccountDTO } from "@src/corecards/types/account.types";

// Mock do client, se necessário
const mockClient = {} as any;

describe("CorecardAccountService", () => {
  const service = new CorecardAccountService(mockClient);

  it("deve criar uma conta", async () => {
    const payload: ICreateAccountDTO = {
      // preencha com dados válidos conforme seu tipo
      email: "test@example.com",
      name: "Test",
      type: 1,
      contact: { phone: "123", mobile: "456" },
      bank: { code: "001", agency: "0001", account: "12345", digit: "6" },
      address: { zipcode: "00000-000", state: "SP", street: "Rua X", city: "Y", neighborhood: "Centro" }
    };
    const result = await service.create(payload);
    expect(result).toHaveProperty("idCorecard");
  });

  it("deve buscar uma conta", async () => {
    const params: IGetAccountDTO = { idCorecard: "mocked-account-id" };
    const result = await service.getOne(params);
    expect(result.idCorecard).toBe("mocked-account-id");
  });
});