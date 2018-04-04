import { Given, When, Then } from 'cucumber';
import LoginPage from '../pages/login.page';
import { expect } from 'chai';

Given(/^I open the home page url "([^"]*)?"$/, (url) => {
  LoginPage.open(url);
  browser.pause(1000);
});

Given(/^I am at the correct page$/, () => {
  expect(LoginPage.signInForm.getText()).to.contain('Please sign in');
  browser.pause(1500);
});

When(/^I clear the email input field$/, () => {
  LoginPage.emailField.clearElement();
});

When(/^I add "([^"]*)?" to the email input field$/, (email) => {
  LoginPage.emailField.setValue(email);
});

When(/^I clear the password input field$/, () => {
  LoginPage.passwordField.clearElement();
});

When(/^I add "([^"]*)?" to the password input field$/, (password) => {
  LoginPage.passwordField.setValue(password);
});

When(/^I click on the sign in button$/, () => {
  LoginPage.signInButton.click();
  browser.pause(1500);
});

Then(/^I expect the error message "([^"]*)?"$/, (message) => {
  expect(LoginPage.returnMessage.getText()).to.contain(message);
});
