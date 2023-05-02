class LoginScreen{
    constructor(){
        this.url = "/index.php?route=account/login"
        this.title = "Account Login"
        this.mailInputSelector= "#input-email"
        this.passInputSelector= "#input-password"
        this.submitBtnSelector= "form > .btn"
    }
    
}
module.exports = LoginScreen