import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchForm from "./SearchForm";

describe("SearchForm Component", () => {
  const onSearchMock = jest.fn();

  beforeEach(() => {
    onSearchMock.mockClear();
  });

  it("Deve atualizar o keyword quando alterar o input", () => {
    render(<SearchForm value="" onSearch={onSearchMock} />);
    const formInputElement = screen.getByLabelText(
      "Ingresá lo que quieras encontrar"
    );

    fireEvent.change(formInputElement, { target: { value: "test" } });

    expect(formInputElement).toHaveValue("test");
  });

  it("Deve chamar onSearch quando form for enviado", () => {
    render(<SearchForm value="" onSearch={onSearchMock} />);
    const inputElement = screen.getByLabelText(
      "Ingresá lo que quieras encontrar"
    );
    const formElement = screen.getByRole("form");

    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.submit(formElement);

    expect(onSearchMock).toHaveBeenCalledWith("test");
  });

  it("Deve renderizar o form com o valor passado via props", () => {
    render(<SearchForm value="iphone" onSearch={onSearchMock} />);
    const inputElement = screen.getByLabelText(
      "Ingresá lo que quieras encontrar"
    );

    expect(inputElement).toHaveValue("iphone");
  });
});
