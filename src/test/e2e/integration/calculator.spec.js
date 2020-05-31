/// <reference types="cypress" />

context("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8082/src/index.html");
  });

  it("should have all numbers", () => {
    cy.get('[data-num="1"]').contains(1);
    cy.get('[data-num="2"]').contains(2);
    cy.get('[data-num="3"]').contains(3);
    cy.get('[data-num="4"]').contains(4);
    cy.get('[data-num="5"]').contains(5);
    cy.get('[data-num="6"]').contains(6);
    cy.get('[data-num="7"]').contains(7);
    cy.get('[data-num="8"]').contains(8);
    cy.get('[data-num="9"]').contains(9);
    cy.get('[data-num="0"]').contains(0);
    cy.get('[data-num="."]').should("exist");
  });

  it("should have all operations", () => {
    cy.get('[data-ops="plus"]').should("exist");
    cy.get('[data-ops="minus"]').should("exist");
    cy.get('[data-ops="multiply"]').should("exist");
    cy.get('[data-ops="divide"]').should("exist");
    cy.get("#equals").should("exist");
  });

  it("should sum", () => {
    cy.get('[data-num="7"]').click();
    cy.get('[data-ops="plus"]').click();
    cy.get('[data-num="5"]').click();
    cy.get("#equals").click();
    cy.get("#result").contains("12");
  });

  it("should substract", () => {
    cy.get('[data-num="7"]').click();
    cy.get('[data-ops="minus"]').click();
    cy.get('[data-num="5"]').click();
    cy.get("#equals").click();
    cy.get("#result").contains("2");
  });

  it("should multiply", () => {
    cy.get('[data-num="7"]').click();
    cy.get('[data-ops="multiply"]').click();
    cy.get('[data-num="5"]').click();
    cy.get("#equals").click();
    cy.get("#result").contains("35");
  });

  it("should divide", () => {
    cy.get('[data-num="7"]').click();
    cy.get('[data-ops="divide"]').click();
    cy.get('[data-num="5"]').click();
    cy.get("#equals").click();
    cy.get("#result").contains("1.4");
  });

  it("should get infinity on a division by zero", () => {
    cy.get('[data-num="7"]').click();
    cy.get('[data-ops="divide"]').click();
    cy.get('[data-num="0"]').click();
    cy.get("#equals").click();
    cy.get("#result").contains("∞");
  });

  it("should be broken on click two operations", () => {
    cy.get('[data-num="7"]').click();
    cy.get('[data-ops="divide"]').click();
    cy.get('[data-ops="multiply"]').click();
    cy.get('[data-num="5"]').click();
    cy.get("#equals").click();
    cy.get("#calculator").should("have.class", "calculator--broken");
  });

  it("should clear the result", () => {
    cy.get('[data-num="7"]').click();
    cy.get("#clear").click();
    cy.get("#result").contains("0");
  });

  it("should calc with float numbers", () => {
    cy.get('[data-num="1"]').click();
    cy.get('[data-num="."]').click();
    cy.get('[data-num="2"]').click();
    cy.get('[data-ops="plus"]').click();
    cy.get('[data-num="2"]').click();
    cy.get('[data-num="."]').click();
    cy.get('[data-num="3"]').click();
    cy.get("#equals").click();
    cy.get("#result").contains("3.5");
  });

  it("should split result every 3 figures with a space", () => {
    cy.get('[data-num="9"]').click();
    cy.get('[data-num="9"]').click();
    cy.get('[data-num="9"]').click();
    cy.get('[data-ops="plus"]').click();
    cy.get('[data-num="1"]').click();
    cy.get("#equals").click();
    cy.get("#result").contains("1 000");
  });
});
