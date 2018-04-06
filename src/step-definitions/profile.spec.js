import { Given, When, Then } from 'cucumber';
import ProfilePage from '../pages/profile.page';

Given(/^I open the url$/, ()=> {
  browser.url('http://vcosta.com.br:8001');
  browser.pause(2500);
});

When(/^I add the (.*)$/, (name)=> {
  ProfilePage.fullNameInputField.setValue(name);
});
