// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.

//import { Subject } from 'rxjs';

// ***********************************************
declare namespace Cypress {
  interface Chainable {
    auth0Login: typeof auth0Login;
    dummy: typeof dummy;
  }
}

function auth0Login(origin: string, username: string, password: string) {
  cy.origin(origin, () => {
    cy.get('#username').type(username);
    cy.get("input[type='password']").type(password);
    cy.get("button[name='action']").click();
  });
}

Cypress.Commands.add('auth0Login', auth0Login);

Cypress.Commands.add('dummy', dummy);
function dummy(): void {
  console.log('Dummy');
}
