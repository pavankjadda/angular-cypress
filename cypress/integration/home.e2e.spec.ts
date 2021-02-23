describe('Home Page Test', () =>
{
  beforeEach(function () {
    cy.visit('/');
  });

  it('Show Error If Failed to show message', () => {

    // Check if the word Welcome exists
    cy.contains('Welcome');
    
    // Visit Angular Website and Angular Blog
    cy.contains('Learn Angular').click();
    cy.contains('Angular Blog').click();
  });

});

