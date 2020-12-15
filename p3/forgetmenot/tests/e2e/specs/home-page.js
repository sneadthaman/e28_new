// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {
  it('Visits the homepage', () => {
      cy.visit('/')
      cy.contains('p', 'Never shop for gift cards at the last minute ever again!')
  })
})
