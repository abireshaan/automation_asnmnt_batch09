const { Browser } = require("selenium-webdriver");
const loginActions = require('../../test/lockedUser/loginActions');


describe('Locked_Out_User Test', () => {
    it('show error message when logging  with locked_out_user', async () => {
        await browser.url('https://www.saucedemo.com/');
        await loginActions.login(usernameInput);
        await loginActions.login(passwordInput);
        
        
        const errorMessage = await LoginPage.errorMessage;
        await expect(errorMessage).toBeDisplayed();
        await expect(errorMessage).toHaveTextContaining('this user has been locked out');
    });
}); 