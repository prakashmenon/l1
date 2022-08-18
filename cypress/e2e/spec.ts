describe('Home Page', () => {
  it('Should show login button', () => {
    cy.visit('/');
    cy.contains('Login');
    cy.contains('The Kitchen Sink Application');
  });

  it('Clicking login should load auth0 login dialog', () => {
    cy.visit('/');
    cy.contains('Login');
    cy.get('[data-test="Login"]').click();
  });
});
