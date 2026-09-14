class BasePage {
    /**
     * Wait for an element to be displayed, then click it.
     * Centralizing this avoids repeating waitForDisplayed() + click()
     * in every page object method.
     */
    async waitAndClick(element) {
        await element.waitForDisplayed();
        await element.click();
    }

    /**
     * Wait for an element to be displayed, then set its value.
     */
    async waitAndSetValue(element, value) {
        await element.waitForDisplayed();
        await element.setValue(value);
    }

    /**
     * Wait for an element to be displayed (generic reusable wait,
     * with a longer default timeout suited to cold app/activity starts).
     */
    async waitForDisplayed(element, timeout = 15000) {
        await element.waitForDisplayed({ timeout });
    }
}

module.exports = BasePage;