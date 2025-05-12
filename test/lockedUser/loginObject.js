class LoginObjects {
    get usernameInput() { 
        return $("//input[@placeholder='Username']"); 
    }
    get passwordInput() { 
        return $("//input[@placeholder='Password']"); 
    }
    get loginButton() { 
        return $("//input[@class='submit-button btn_action']"); 
    }
    get errorMessage() {
         return $('[data-test="error"]'); 
    }

}

module.exports = new LoginObjects();