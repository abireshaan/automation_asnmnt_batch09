const StandardUserObjects = require("./standardUserObject");
const usernameInput = "standard_user";
const passwordInput = "secret_sauce";


class standardUserActions {
     async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new standardUserActions();