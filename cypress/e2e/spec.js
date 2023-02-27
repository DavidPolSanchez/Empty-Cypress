describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://boehringer-ingelheim.com/')
    //interaction with elements
    cy.get('.it-eprivacy-banner-btn--primary').click()

    cy.get('[title="Products"]').click()
    //!!asertion
    cy.url().should('eq','https://pro.boehringer-ingelheim.com/products')
  })
})