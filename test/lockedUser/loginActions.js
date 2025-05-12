const LoginObjects = require("./loginObject");
const usernameInput = "locked_out_user";
const passwordInput = "secret_sauce";

class LoginActions {
     async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginActions();