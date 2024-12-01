import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { contactInfoArray } from "./data";

describe("App Component", () => {
  test("renders the header", () => {
    render(<App />);
    const header = screen.getByText(
      "№17 Демонстрация на CI/CD - дизайн, създаване и изпълнение на pipelines чрез популярни инструменти"
    );
    expect(header).toBeInTheDocument();
  });

  test("renders the correct number of ContactCard components", () => {
    render(<App />);
    const contactCards = screen.getAllByRole("article"); // Assuming ContactCard uses a semantic wrapper like <article>
    expect(contactCards.length).toBe(contactInfoArray.length);
  });

  test("passes correct props to ContactCard components", () => {
    render(<App />);
    contactInfoArray.forEach((contact, index) => {
      const name = screen.getByText(contact.name);
      const about = contact.about ? screen.getByText(contact.about) : null;
      const email = contact.email ? screen.getByText(contact.email) : null;

      expect(name).toBeInTheDocument();
      if (about) expect(about).toBeInTheDocument();
      if (email) expect(email).toBeInTheDocument();
    });
  });
});
