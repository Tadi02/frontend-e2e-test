describe('Cat App Tests', () => {

  beforeEach(function() {
    cy.visit('http://localhost:4200/');

    cy.url().should('include', '/login');
    cy.get('#email').type('test@example.com').should('have.value', 'test@example.com');
    cy.get('#password').type('test').should('have.value', 'test');
    cy.get('.btn').click();
  });

  it('Should have 2 cats by default', () => {
    cy.contains('Here are the cats!');
    cy.get('tbody > tr').should('have.length', 2);
  });

  it('Can add a new cat', () => {
    cy.get('.btn').click();

    cy.contains('Add a new cat');
    cy.get('#name').type('Snowglobe').should('have.value', 'Snowglobe');
    cy.get('#age').type('5').should('have.value', '5');
    cy.get('#weight').type('4').should('have.value', '4');

    cy.get('#add-cat').click();

    cy.get('tbody > tr').should('have.length', 3);
  });

  it('Can remove a cat', () => {
    cy.get('.delete-link').first().click();

    cy.get('tbody > tr').should('have.length', 1);
  });

  it('Can remove all cats', () => {
    cy.get('.delete-link').click({multiple: true});
    cy.get('tbody > tr').should('have.length', 0);
    cy.contains('No cats :(');
  });
});
