class ProductsPage {
    get productsHeader() {
        return $('-ios predicate string:name == "PRODUCTS"');
    }

    async isDisplayed() {
        await this.productsHeader.waitForDisplayed({ timeout: 15000 });
        return this.productsHeader.isDisplayed();
    }
}

module.exports = new ProductsPage();