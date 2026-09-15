const i18n = require('../../utils/i18n.manager');

class ProductsPage {
    get productsHeader() {
        return $('android=new UiSelector().text("' + i18n.get('products.header') + '")');
    }

    async isDisplayed() {
        await this.productsHeader.waitForDisplayed({ timeout: 15000 });
        return this.productsHeader.isDisplayed();
    }
}

module.exports = new ProductsPage();