import Login from "../Pages-POM/Login.PO"
const login = new Login()

describe('Testing Login Page', () => {
    beforeEach(() => {
        login.visit()
    })

    it("should visit the Login page", () => {
        cy.title().should("eq",login.title)
    })

    it("Should Log in ", () => {
        //*david@gmail.com
        login.mailInput("david@gmail.com")
       
        //*1234
        login.passInput("1234")
        
        //?SUBMIT
        login.submit()
        
         
        cy.title().should("eq","My Account")
    })
})