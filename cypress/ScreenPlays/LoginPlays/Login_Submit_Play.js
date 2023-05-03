import LoginScreen from "./Screens/LoginScreen"
const loginScreen = new LoginScreen()

class Login_Submit_Play{

    constructor(){
         
    }
    perform(){
        cy.get(loginScreen.submitBtnSelector).click()
    }
    
}
module.exports = Login_Submit_Play