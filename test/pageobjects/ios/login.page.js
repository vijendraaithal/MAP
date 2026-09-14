const BasePage = require('../base/base.page');

class LoginPage extends BasePage {
    // ===== Locators =====
    get usernameInput() {
        return $('~test-Username'); // accessibility id — identical value to Android
    }

    get passwordInput() {
        return $('~test-Password'); // accessibility id — identical value to Android
    }

    get loginButton() {
        return $('~test-LOGIN'); // accessibility id — iOS-only; Android has none for this element
    }

    // ===== Actions =====
    async login(username, password) {
        await this.waitAndSetValue(this.usernameInput, username);
        await this.waitAndSetValue(this.passwordInput, password);
        await this.waitAndClick(this.loginButton);
    }
}

module.exports = new LoginPage();