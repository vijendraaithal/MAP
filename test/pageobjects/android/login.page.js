const BasePage = require('../base/base.page');

class LoginPage extends BasePage {
    // ===== Locators =====
    get usernameInput() {
        return $('~test-Username'); // accessibility id (the `~` prefix tells WDIO to use "accessibility id" strategy)
    }

    get passwordInput() {
        return $('~test-Password');
    }

    get loginButton() {
        return $('android=new UiSelector().text("LOGIN")');
    }

    // ===== Actions =====
    async login(username, password) {
        await this.waitAndSetValue(this.usernameInput, username);
        await this.waitAndSetValue(this.passwordInput, password);
        await this.waitAndClick(this.loginButton);
    }
}

module.exports = new LoginPage();