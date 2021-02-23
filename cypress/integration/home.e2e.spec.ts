describe('Home Page Test', () =>
{
  beforeEach(function () {
    cy.visit('/');
  });

  it('Show Error If Failed to show message', () => {

    // Check if the word Welcome exists
    cy.contains('Welcome');
    
    cy.contains('New Component').click();


  });

});

