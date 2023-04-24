class Login{
    constructor(){
        this.url = "/index.php?route=account/login"
        this.title = "Account Login"
    }
    visit(){
        cy.visit(this.url)
    }
    mailInput(email){
        return cy.get("#input-email").type(email)
    }
    passInput(pass){
        return cy.get("#input-password").type(pass)
    }
    submit(){
        cy.get('form > .btn').click()
    }
}
module.exports = Login