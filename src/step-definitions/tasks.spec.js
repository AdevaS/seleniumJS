import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import LoginPage from '../pages/login.page';
import TasksPage from '../pages/tasks.page';
import Converter from '../utilities/converter';
import NavbarPage from '../pages/navbar.page';

var taskOnFirstRowSelector = '//*[@id="app"]/div/div/div[2]/div[2]/div/table/tbody/tr[1]';

Given(/^I am already logged as the user admin$/, () => {
  LoginPage.loginWith('admin');
});

Then(/^I am at the tasks page$/, () => {
  expect(browser.getUrl()).to.contain('tasks');
});

When(/^I choose todays date in the when input field$/, () => {
  TasksPage.whenDateField.click();
  browser.pause(500);
  browser.keys(['2','0','1','8']);
  browser.pause(500);
  browser.keys("Tab");
  browser.pause(500);
  browser.keys(['0','4']);
  browser.pause(500);
  browser.keys(['0','5']);
});

When(/^I add "([^"]*)?" to the time spent field$/, (timespent) => {
  TasksPage.whenTimeSpentInputField.setValue(timespent);
});

Then(/^I add "([^"]*)?" to the note text area field$/, (note) => {
  TasksPage.notesTextAreaField.setValue(note);
});

Then(/^I click on the save task button$/, () => {
  TasksPage.saveTaskButton.click();
});

Then(/^A new task is added to the tasks panel$/, () => {
  TasksPage.taskOnFirstRow.waitForExist(5000);
  expect(browser.isVisible(taskOnFirstRowSelector)).to.be.true;
});

Then(/^This task must have a background color "([^"]*)?"$/, (expectedColor) => {
  var actualColorRgba = TasksPage.taskOnFirstRow.getCssProperty('background-color').value;
  var actualColorHex = Converter.rgbaToHex(actualColorRgba);

    // In case of an AssertionError the falty register still needs to be removed
    try {
      expect(actualColorHex).to.equal(expectedColor);
    } catch (e) {
      TasksPage.firstRowDeleteTaskButton.click();
      browser.pause(1500);
      browser.alertAccept();
      browser.pause(2500);
      console.log(e);
      expect.fail();
    }
});

Given(/^I click on the delete button$/, () => {
  TasksPage.firstRowDeleteTaskButton.click();
  browser.pause(1500);
});

Then(/^I confirm the deletion on the popup$/, () => {
  browser.alertAccept();
  browser.pause(2500);
});

Then(/^The task must be removed from the tasks panel$/, () => {
  expect(browser.isVisible(taskOnFirstRowSelector)).to.be.false;
});

Then(/^I click on the sign out button$/, () => {
  NavbarPage.signOutLink.click();
});
