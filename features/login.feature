Feature: Testing the LOGIN PAGE for the Time Management System
  @wip
  Scenario: log in with fake credentials
    Given I open the home page url "http://vcosta.com.br:8001"
    And   I am at the sign in page
    And   I clear the email input field
    When  I add "foo" to the email input field
    And   I clear the password input field
    And   I add "bar" to the password input field
    And   I click on the sign in button
    Then  I expect the error message "Oops! Could not authenticate user"
