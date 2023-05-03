import LoginScreen from "./Screens/LoginScreen"
const loginScreen = new LoginScreen()

class Login_PassInput_Play{

    constructor(){
    }
    perform(pass){
        return cy.get(loginScreen.passInputSelector).type(pass)
    }
    
}
module.exports = Login_PassInput_Play