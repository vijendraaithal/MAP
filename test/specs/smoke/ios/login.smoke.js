const LoginPage = require('../../../pageobjects/ios/login.page');
const ProductsPage = require('../../../pageobjects/ios/products.page');

describe('Login - iOS Smoke', () => {
    it('should log in with valid standard_user credentials and land on Products screen', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');

        const isProductsPageDisplayed = await ProductsPage.isDisplayed();
        expect(isProductsPageDisplayed).toBe(true);
    });
});