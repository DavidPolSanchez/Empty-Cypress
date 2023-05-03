import LoginScreen from "./Screens/LoginScreen"
const loginScreen = new LoginScreen()

class Login_GoToUrl_Play{
    
    constructor(){
    }
    perform(){
        cy.visit(loginScreen.url)
    }
}
module.exports = Login_GoToUrl_Play