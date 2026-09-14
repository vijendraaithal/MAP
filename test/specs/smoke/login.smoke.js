const LoginPage = require('../../pageobjects/android/login.page');
const ProductsPage = require('../../pageobjects/android/products.page');

describe('Login - Android Smoke', () => {
    it('should log in with valid standard_user credentials and land on Products screen', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');

        const isProductsPageDisplayed = await ProductsPage.isDisplayed();
        expect(isProductsPageDisplayed).toBe(true);
    });
});