import { Menu } from "./menu";
import { render, screen } from "@testing-library/react";

describe("given the component menu", () => {
  const menuItems = [
    { path: "/", label: "Inicio" },
    { path: "/books", label: "Libros" },
    { path: "/about", label: "About" },
  ];
  describe("when component is instantiated", () => {
    beforeEach(() => {
      // Arrange
      // Act
      render(<Menu menuItems={menuItems} />);
    });
    test("then it should be rendered in the document", () => {
      // Arrange
      const renderedElement = screen.getByText(/Inicio/i);
      //Act
      //Assert
      expect(renderedElement).toBeTruthy();
      expect(renderedElement).toBeInTheDocument();
    });

    test("then it should be 3 menu items", () => {
      // Arrange
      const renderedElements = screen.getAllByRole("link");
      //Assert
      expect(renderedElements).toBeTruthy();
      expect(renderedElements.length).toBe(3);
    });
  });
});
