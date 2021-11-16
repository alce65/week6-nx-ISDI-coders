import { Footer } from "./footer";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Test fake", () => {
  test("should be true 3 === 3", () => {
    expect(3 === 3).toBe(true);
  });
});

describe("given the component footer", () => {
  describe("when component is instantiated", () => {
    beforeEach(() => {
      // Arrange
      // Act
      render(<Footer />);
    });
    test("then it should be rendered in the document", () => {
      // Arrange
      const renderedElement = screen.getByText(/Powered by/i);
      //Act
      //Assert
      expect(screen).toBeTruthy();
      expect(renderedElement).toBeTruthy();
      expect(renderedElement).toBeInTheDocument();
    });
    test("then it should contain a link to Vercel ", () => {
      // Arrange
      const renderedElement = screen.getByText(/Powered by/i);
      //Act
      //Assert
      expect(renderedElement.href).toContain("vercel.com");
      //expect(renderedElement).toHaveAttribute("href", "https://vercel.com");
    });
  });
});
