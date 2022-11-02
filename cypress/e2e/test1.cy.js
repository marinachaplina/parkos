describe('My First Test', () => {
  it('Open link and type e-mail', () => {
    
    // open the site 'https://example.cypress.io'
    cy.visit('https://example.cypress.io')

    // find the content 'type' and click
    cy.contains('type').click()

    // Should be a new URL witch includes '/commands/actions'
    cy.url().should('include','/commands/actions')

    // Get an input, type into 'fake@email.com'
    // verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})