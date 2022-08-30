// Copyright (c) 2022 Prakash Menon
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

describe('Login handling', () => {
  const loginURL = `https://${Cypress.env('auth0Domain')}/u/login`;
  const origin = `${loginURL}/`; //origin needs the trailing slash

  beforeEach(() => {
    cy.visit('/');
    cy.contains('Login');
  });

  it('Should show login button', () => {
    cy.contains('The Kitchen Sink Application');
  });

  it('Clicking login should load auth0 login dialog', () => {
    cy.get('#login').click();
    cy.origin(origin, { args: { loginURL: loginURL } }, ({ loginURL }) => {
      cy.url().should('include', loginURL);
    });
  });

  it('Entering invalid username and password on auth0 login dialog should show error message', () => {
    cy.get('#login').click();
    cy.origin(origin, () => {
      // Using dynamic username since auth0 black lists usernames that have too many failures.
      const badUserName = 'Bad User ' + Math.floor(Math.random() * 10000);
      cy.get('#username').type(badUserName);
      cy.get("input[type='password']").type('Bad Password');
      cy.get("button[name='action']").click();
      cy.get('#error-element-password').contains('Wrong email or password');
    });
  });

  it('Entering valid username and invalid password on auth0 login dialog should show error message', () => {
    cy.get('#login').click();
    cy.origin(origin, () => {
      cy.get('#username').type(Cypress.env('cypressTestEmail'));
      cy.get("input[type='password']").type('Bad Password');
      cy.get("button[name='action']").click();
      cy.get('#error-element-password').contains('Wrong email or password');
    });
  });

  it('Entering valid username and password on auth0 login dialog should not show error message', () => {
    cy.get('#login').click();
    cy.origin(origin, () => {
      cy.get('#username').type(Cypress.env('cypressTestEmail'));
      cy.get("input[type='password']").type(Cypress.env('cypressTestPassword'));
      cy.get("button[name='action']").click();
    });
  });
});
