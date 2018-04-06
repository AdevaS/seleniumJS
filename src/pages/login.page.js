import Page from './page';

class LoginPage extends Page {

  get usernameInputField () { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(1) > input'); }
  get passwordInputField () { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(2) > input'); }
  get signInButton ()       { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(3) > button'); }
  get signInForm ()         { return $('#app > div > div > div.panel.panel-default.col-lg-6'); }
  get returnMessage ()      { return $('#app > div > div.alert.alert-danger'); }
  get signUpButton ()       { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(6) > a'); }

  open() {
    super.open('/');
  }

  loginWith(username) {
    browser.url('http://vcosta.com.br:8001');
    browser.pause(3000);
    if (username = 'admin') {
      browser.setValue('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(1) > input', 'admin');
    } else if (username === 'manager') {
      return usernameInputField.setValue('manager');
    } else {
      return usernameInputField.setValue('user');
    }
    browser.setValue('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(2) > input', '123456');
    browser.click('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(3) > button');
    browser.pause(5000);
  }

}

export default new LoginPage();
