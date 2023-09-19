import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("Loader Component", () => {
  it("Deve renderizar Loader com mensagem via props", () => {
    render(<Loader text="carregando produtos"></Loader>);

    expect(screen.getByText("carregando produtos")).toBeInTheDocument();
  });
});
