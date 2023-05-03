import LoginScreen from "./Screens/LoginScreen"
const loginScreen = new LoginScreen()

class Login_MailInput_Play{

    constructor(){
         
    }
    perform(email){
        return cy.get(loginScreen.mailInputSelector).type(email)
    }
    
}
module.exports = Login_MailInput_Play