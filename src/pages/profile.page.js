import Page from './page';

class ProfilePage extends Page {

  get fullNameInputField () { return $('#app > div > div > div.col-lg-6 > div > div.panel.panel-body > form > div:nth-child(1) > input'); }
  get clearButton () { return $('#app > div > div > div.col-lg-6 > div > div.panel.panel-body > form > div:nth-child(6) > button.btn.btn-default'); }

}

export default new ProfilePage();
