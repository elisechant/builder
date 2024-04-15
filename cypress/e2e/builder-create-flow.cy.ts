describe('Builder Create flow', () => {
  it('can click through happy path', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name="firstName"]').type('Peter').then($ => {
      expect($.val()).to.eq('Peter')
    })
    cy.get('input[name="lastName"]').type('Pan')
    cy.get('input[name="email"]').type('peter@neverneverland.com')
    cy.get('input[name="phone"]').type('0415248711')
    cy.get('input[name="addressStreetNumber"]').type('1')
    cy.get('input[name="addressStreet"]').type('Magic Way')
    cy.get('input[name="addressSuburb"]').type('Neverland')
    cy.get('input[name="addressState"]').type('NT')
    cy.get('input[name="addressPostcode"]').type('3000')
    cy.get('input[name="addressCountry"]').type('Australia')

    cy.get('[data-testid="edit-hcard-submit"]').click()
    cy.wait(200)
    cy.get('[data-testid="goto-published"]').click()
    cy.wait(400)
    cy.get('[data-testid="goto-builder"]').click()
  })

  it('can upload file', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="file-input"]').selectFile('cypress/fixtures/profile-pic.png', { force: true })
    cy.get('[data-testid="hcard-avatar"]').should('have.css', 'backgroundImage')
  })
})
