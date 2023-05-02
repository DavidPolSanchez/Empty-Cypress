import LoginScreen from "./Screens/LoginScreen"
const loginScreen = new LoginScreen()

class Login{
    
    constructor(){
         
    }
    visit(){
        cy.visit(loginScreen.url)
    }
    mailInput(email){
        return cy.get(loginScreen.mailInputSelector).type(email)
    }
    passInput(pass){
        return cy.get(loginScreen.passInputSelector).type(pass)
    }
    submit(){
        cy.get(loginScreen.submitBtnSelector).click()
    }
}
module.exports = Login