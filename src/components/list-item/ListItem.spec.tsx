import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Product } from "../../models/Product";
import { BrowserRouter } from "react-router-dom";
import ListItem from "./ListItem";

const mockProduct: Product = {
  id: "123",
  title: "Product title",
  price: {
    decimals: 0,
    currency: "ARG",
    amount: 100,
  },
  picture: "test.jpg",
  free_shipping: true,
  location: "Location example",
  condition: "new",
  categories: ["category 1", "category 2"],
  sold_quantity: 10,
};

describe("ListItem Component", () => {
  it("Deve renderizar corretamente com o icon shipping", () => {
    render(
      <BrowserRouter>
        <ListItem item={mockProduct} />
      </BrowserRouter>
    );

    expect(screen.getByText("$ 100")).toBeInTheDocument();
    expect(screen.getByText("Product title")).toBeInTheDocument();
    expect(
      screen.getByAltText("Este produto possui envio imediato")
    ).toBeInTheDocument();
  });

  it("Deve renderizar corretamente sem o icon shipping", () => {
    mockProduct.free_shipping = false;
    render(
      <BrowserRouter>
        <ListItem item={mockProduct} />
      </BrowserRouter>
    );

    expect(screen.getByText("$ 100")).toBeInTheDocument();
    expect(screen.getByText("Product title")).toBeInTheDocument();
    expect(
      screen.queryByAltText("Este produto possui envio imediato")
    ).not.toBeInTheDocument();
  });

  it("Deve redirecionar para tela de detalhe de produto ao clicar no item da lista", () => {
    render(
      <BrowserRouter>
        <ListItem item={mockProduct} />
      </BrowserRouter>
    );
    const listItem = screen.getByRole("link");

    expect(listItem).toHaveAttribute("href", "/123");
  });
});
