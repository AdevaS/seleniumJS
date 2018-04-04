var Page = require('./page');

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    emailField:    { get: function () { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(1) > input'); } },
    passwordField: { get: function () { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(2) > input'); } },
    signInButton:  { get: function () { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(3) > button'); } },
    signInForm:    { get: function () { return $('#app > div > div > div.panel.panel-default.col-lg-6'); } },
    returnMessage: { get: function () { return $('#app > div > div.alert.alert-danger'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '/');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = LoginPage;

// ES6
// var Page = require('./page');
//
// var LoginPage extends Page {
//
//   get emailField ()    { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(1) > input'); }
//   get passwordField () { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(2) > input'); }
//   get signInButton ()  { return $('#app > div > div > div.panel.panel-default.col-lg-6 > div.panel-body > form > div:nth-child(3) > button'); }
//   get signInForm()     { return $('#app > div > div > div.panel.panel-default.col-lg-6'); }
//   get returnMessage()  { return $('#app > div > div.alert.alert-danger'); }
//
//   open() {
//     super.open('/');
//   }
//
//   click() {
//     this.signInButton.click();
//   }
//
// }
//
// export default new LoginPage();
