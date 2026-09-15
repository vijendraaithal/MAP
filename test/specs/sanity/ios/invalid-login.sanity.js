const LoginPage = require('../../../pageobjects/ios/login.page');

describe('Login - iOS Sanity', () => {
    it('should show an error message when logging in with an incorrect password', async () => {
        await LoginPage.login('standard_user', 'wrong_password');

        const errorText = await LoginPage.getErrorMessageText();
        expect(errorText).toBe('Username and password do not match any user in this service.');
    });
});