const LoginPage = require('../../../pageobjects/android/login.page');

describe('Login - Android Sanity', () => {
    it('should show an error message when logging in with an incorrect password', async () => {
        await LoginPage.login('standard_user', 'wrong_password');

        const errorText = await LoginPage.getErrorMessageText();
        expect(errorText).toBe('Username and password do not match any user in this service.');
    });
});