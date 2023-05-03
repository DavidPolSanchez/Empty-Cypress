import Login_GoToUrl_Play from "../ScreenPlays/LoginPlays/Login_GoToUrl_Play"
const login_GoToUrl = new Login_GoToUrl_Play()
import Login_MailInput_Play from "../ScreenPlays/LoginPlays/Login_MailInput_Play"
const login_MailInput = new Login_MailInput_Play()
import Login_PassInput_Play from "../ScreenPlays/LoginPlays/Login_PassInput_Play"
const login_PassInput = new Login_PassInput_Play()
import LoginScreen from "../ScreenPlays/LoginPlays/Screens/LoginScreen"
const loginScreen = new LoginScreen()
import Login_Submit_Play from "../ScreenPlays/LoginPlays/Login_Submit_Play"
const login_submit = new Login_Submit_Play()

import userdata from "../fixtures/user.json"
describe('Testing Login Page',() =>{
    beforeEach(() =>{
        login_GoToUrl.perform()
        cy.fixture('user').then(function(user){//PROMISE
            this.email = user.email,
            this.password = user.password,
            this.loggedTittle = user .loggedTittle
        })
    })

    it("should visit the Login page",() => {
        cy.title().should("eq",loginScreen.title)
    })

    it("Should Log in ", function() { 
        login_MailInput.perform(this.email)
        login_PassInput.perform(this.password)
        login_submit.perform()

        cy.title().should("eq",this.loggedTittle)
    })
})