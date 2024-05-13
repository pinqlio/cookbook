it('user should be able to log in', () => {
    cy.visit('/loginPage')
  
    // fill in the form
    cy.get('input[type="text"]').type('testUser')
    cy.get('input[type="password"]').type('asdqwe123')
  
    // submit the form
    cy.get('button').contains('Login').click()
  }) 