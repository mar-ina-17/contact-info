import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { contactInfoArray } from "./data";

describe("App Component", () => {
  // Test: Ensure the header renders correctly
  it("renders the header", () => {
    render(<App />);
    const header = screen.getByText(
      "№17 Демонстрация на CI/CD - дизайн, създаване и изпълнение на pipelines чрез популярни инструменти"
    );
    expect(header).toBeInTheDocument(); // Check if the header is in the DOM
  });

  // Test: Verify the correct number of ContactCard components are rendered
  it("renders the correct number of ContactCard components", () => {
    render(<App />);
    const contactCards = screen.getAllByRole("article"); // Assuming <article> is used in ContactCard
    expect(contactCards).toHaveLength(contactInfoArray.length); // Verify length matches
  });

  // Test: Ensure props are passed correctly to ContactCard components
  it("passes correct props to ContactCard components", () => {
    render(<App />);
    contactInfoArray.forEach((contact) => {
      // Verify each piece of data is rendered correctly
      const name = screen.getByText(contact.name);
      expect(name).toBeInTheDocument();

      if (contact.about) {
        const about = screen.getByText(contact.about);
        expect(about).toBeInTheDocument();
      }

      if (contact.email) {
        const email = screen.getByText(contact.email);
        expect(email).toBeInTheDocument();
      }
    });
  });
});
