import { welcome } from "./welcome";

describe("welcome", () => {
  it("Deve exibir uma mensagem de boas vindas com o nome informado", () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    welcome("João");
    expect(alertSpy).toHaveBeenCalledWith("Bem-vindo(a), João!");
    alertSpy.mockRestore();
  });
});
