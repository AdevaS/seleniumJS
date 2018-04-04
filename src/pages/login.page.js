import Page from './page';

class LoginPage extends Page {

  get emailField ()    { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(1) > input'); }
  get passwordField () { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(2) > input'); }
  get signInButton ()  { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(3) > button'); }
  get signInForm ()    { return $('#app > div > div > div.panel.panel-default.col-lg-6'); }
  get returnMessage () { return $('#app > div > div.alert.alert-danger'); }

  open() {
    super.open('/');
  }

}

export default new LoginPage();
