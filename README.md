# seleniumJS
Selenium Framework using WebdriverIO, PageObject Pattern and CucumberJS

## Requirements
- Node version 8.0 or higher
- WebdriverIO version 4.12 or higher

## Quick start
1. Clone the repository
2. Install the dependencies `npm install`

## Features
- Super simple setup
- Use of [`WebdriverIO`](http://webdriver.io/) with the PageObject Pattern to decrease code maintainability
- CucumberJS integration for BDD and easy to read test scenarios
- [`Chai Assertion Library`](http://www.chaijs.com/) integration for easy to read assertions and increased code readability
- Easy test reports with Allure Report
- Babel for ES6 syntax

## How to write a test
Tests are written in [Gherkin syntax](https://cucumber.io/docs/reference)
that means that you write down what's supposed to happen in a real language. All test files are located in
`./features/*` and have the file ending `.feature`. You will already find some test files in that
directory. They should demonstrate, how tests could look like. Just create a new file and write your first
test.

__myFirstTest.feature__
```gherkin
Feature:
    In order to keep my website save
    As a developer or product manager
    I want to make sure that the LOG IN page works as expected

Scenario: trying to log in without fake informations
    Given I open the url "http://vcosta.com.br:8001"
    When  I set "admin" to the username inputfield
    And   I set "admin" to the password inputfield
    And   I click the sign in button
    Then  I expect the error message "Oops! Could not authenticate user"

Scenario: Another test
    Given ...

```

This test opens the browser and navigates them to google.com to check if the title contains the search
query after doing a search. As you can see, it is pretty simple and understandable for everyone.

# How to run the test
```sh
$ npm run test
```

To generate the test report
```sh
$ npm run report
```

To execute a single feature file
```sh
$ "./node_modules/.bin/wdio wdio.conf.js" --spec "features/[FILE_NAME].feature"
```

# Configurations

To configure your tests, you can change the [`wdio.conf.js`](https://github.com/webdriverio/cucumber-boilerplate/blob/master/wdio.conf.js) file in your project directory.
1. You can change the browser by simply changing the browserName inside the capabilities option:
```
capabilities: [{
  maxInstances: 1,
  browserName: 'chrome'
 }],
 ```
 
 # Known Issues
 1. It is not possible to use ```Scenario Outline``` inside the feature files
 2. The use of @tags inside the feature files is not advised
 
 
