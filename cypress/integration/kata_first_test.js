/// <reference types="Cypress" />

describe('My First Test Suite', () => {
   it('test url works', () => {
      cy.visit('https://localhost:4100')
   });
})
