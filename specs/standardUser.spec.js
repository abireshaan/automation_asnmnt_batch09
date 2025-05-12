const { Browser } = require("selenium-webdriver");
const loginActions = require('../../test/standardUser/standardUserActions');
const itemNames = [];
const firstItem = "Test.allTheThings() T-Shirt (Red)";
const secondItem = "Sauce Labs Bike Light";
const thirdItem = "Sauce Labs Bolt T-Shirt";


describe('standard_User Test', () => {
    it('should complete purchase flow with standard_user and multiple items', async () => {
        await browser.url('https://www.saucedemo.com/');
        await loginActions.login(usernameInput);
        await loginActions.login(passwordInput);
        
        
        const errorMessage = await LoginPage.errorMessage;
        await expect(errorMessage).toBeDisplayed();
        await expect(errorMessage).toHaveTextContaining('this user has been locked out');

        await expect($('.inventory_list')).toBeDisplayed();
        
        await $('#react-burger-menu-btn').click();
        await browser.pause(500);
        await $('#reset_sidebar_link').click();
        await browser.pause(500); 
        await $('#react-burger-cross-btn').click();

        await $('.inventory_item:nth-child(1) .inventory_item_name');
        itemNames.push(await firstItem.getText());
        await $('.inventory_item:nth-child(1) button').click();
        
        
        await $('.inventory_item:nth-child(2) .inventory_item_name');
        itemNames.push(await secondItem.getText());
        await $('.inventory_item:nth-child(2) button').click();
        
        
        await $('.inventory_item:nth-child(3) .inventory_item_name');
        itemNames.push(await thirdItem.getText());
        await $('.inventory_item:nth-child(3) button').click();
    });
});