const BasePage = require('../base/base.page');

class LoginPage extends BasePage {
  get usernameInput() {
    return $('~test-Username');
  }

  get passwordInput() {
    return $('~test-Password');
  }

  get loginButton() {
    return $('android=new UiSelector().text("LOGIN")');
  }

  get errorMessage() {
    return $('~test-Error message').$('android.widget.TextView');
  }

  async login(username, password) {
    await this.waitAndSetValue(this.usernameInput, username);
    await this.waitAndSetValue(this.passwordInput, password);
    await this.waitAndClick(this.loginButton);
  }

  async getErrorMessageText() {
    await this.errorMessage.waitForDisplayed({ timeout: 15000 });
    return this.errorMessage.getText();
  }
}

module.exports = new LoginPage();
