/// <reference types="cypress" />

context("Calculator using keyboard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8082/src/index.html");
  });

  it("should sum", () => {
    cy.get("body").trigger("keydown", { key: "7" });
    cy.get("body").trigger("keydown", { key: "+" });
    cy.get("body").trigger("keydown", { key: "5" });
    cy.get("body").trigger("keydown", { key: "=" });
    cy.get("#result").contains("12");
  });

  it("should substract", () => {
    cy.get("body").trigger("keydown", { key: "7" });
    cy.get("body").trigger("keydown", { key: "-" });
    cy.get("body").trigger("keydown", { key: "5" });
    cy.get("body").trigger("keydown", { key: "Enter" });
    cy.get("#result").contains("2");
  });

  it("should multiply", () => {
    cy.get("body").trigger("keydown", { key: "7" });
    cy.get("body").trigger("keydown", { key: "*" });
    cy.get("body").trigger("keydown", { key: "5" });
    cy.get("body").trigger("keydown", { key: "=" });
    cy.get("#result").contains("35");
  });

  it("should divide", () => {
    cy.get("body").trigger("keydown", { key: "7" });
    cy.get("body").trigger("keydown", { key: "/" });
    cy.get("body").trigger("keydown", { key: "5" });
    cy.get("body").trigger("keydown", { key: "Enter" });
  });

  it("should clear the result", () => {
    cy.get("body").trigger("keydown", { key: "7" });
    cy.get("body").trigger("keydown", { key: "Backspace" });
    cy.get("#result").contains("0");
  });

  it("should calc with float numbers", () => {
    cy.get("body").trigger("keydown", { key: "1" });
    cy.get("body").trigger("keydown", { key: "." });
    cy.get("body").trigger("keydown", { key: "2" });
    cy.get("body").trigger("keydown", { key: "+" });
    cy.get("body").trigger("keydown", { key: "2" });
    cy.get("body").trigger("keydown", { key: "." });
    cy.get("body").trigger("keydown", { key: "3" });
    cy.get("body").trigger("keydown", { key: "=" });
    cy.get("#result").contains("3.5");
  });

  it("should add and remove active class on keyboard press", () => {
    cy.get("body").trigger("keydown", { key: "1" });
    cy.get('[data-num="1"]').should("have.class", "calculator__btn--active");
    cy.get('[data-num="1"]').should(
      "not.have.class",
      "calculator__btn--active"
    );
  });
});
