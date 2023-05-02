import Login from "../ScreenPlays/LoginPlays/Login.PO"
const login = new Login()

import LoginScreen from "../ScreenPlays/LoginPlays/Screens/LoginScreen"
const loginScreen = new LoginScreen()

import userdata from "../fixtures/user.json"
describe('Testing Login Page',() =>{
    beforeEach(() =>{
        login.visit()
        cy.fixture('user').then(function(user){//PROMISE
            this.userData = user
        })
    })

    it("should visit the Login page",() => {
        cy.title().should("eq",loginScreen.title)
    })

    it("Should Log in ", function() { 
        login.mailInput(this.userData.email)
        login.passInput(this.userData.password)
        login.submit()

        cy.title().should("eq",this.userData.loggedTittle)
    })
})