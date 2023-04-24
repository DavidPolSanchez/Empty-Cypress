
describe('Testing Blog Page', () => {
    beforeEach(() => {
        cy.visit("/index.php?route=account/login")
    })

    it("should visit the Login page", () => {
        cy.title().should("eq","Account Login")
    })

    it("Should Log in ", () => {
        //*david@gmail.com
        cy.get('#input-email').type("david@gmail.com")
        //*1234
        cy.get('#input-password').type("1234")
        //?SUBMIT
        cy.get('form > .btn').click()
        
        cy.title().should("eq","My Account")
    })
})