import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb Component", () => {
  it("Deve renderizar as categorias recebidas via props", () => {
    const categories = ["Categoria 1", "Categoria 2", "Categoria 3"];
    render(<Breadcrumb categories={categories} />);
    const breadcrumbItems = screen.getAllByRole("listitem");

    expect(breadcrumbItems).toHaveLength(categories.length);

    categories.forEach((category, index) => {
      expect(breadcrumbItems[index]).toHaveTextContent(category);
    });
  });

  it("Não deve renderizar quando lista de categoria vazia", () => {
    const categories: string[] = [];
    render(<Breadcrumb categories={categories} />);
    const breadcrumbItems = screen.queryAllByRole("listitem");

    expect(breadcrumbItems).toHaveLength(0);
  });

  it("Deve atualizar categorias quando houver alteração na props", () => {
    const initialCategories = ["Categoria 1"];
    const updatedCategories = ["Categoria 4", "Categoria 5"];

    const { rerender } = render(<Breadcrumb categories={initialCategories} />);
    let breadcrumbItems = screen.getAllByRole("listitem");

    expect(breadcrumbItems).toHaveLength(initialCategories.length);

    rerender(<Breadcrumb categories={updatedCategories} />);
    breadcrumbItems = screen.getAllByRole("listitem");

    expect(breadcrumbItems).toHaveLength(updatedCategories.length);

    updatedCategories.forEach((category, index) => {
      expect(breadcrumbItems[index]).toHaveTextContent(category);
    });
  });
});
