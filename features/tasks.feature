Feature: Testing the TASK PAGE for the Time Management System

  Scenario: create a new task to validate the correct RED background color removing the register afterwards
    Given I am already logged as the user admin
    And   I am at the tasks page
    When  I choose todays date in the when input field
    And   I add "7" to the time spent field
    And   I add "The color of this register should be RED" to the note text area field
    And   I click on the save task button
    Then  A new task is added to the tasks panel
    And   This task must have a background color "#f2dede"
    Given I click on the delete button
    And   I confirm the deletion on the popup
    Then  The task must be removed from the tasks panel
    Then  I click on the sign out button

  Scenario: create a new task to validate the correct GREEN background color removing the register afterwards
    Given I am already logged as the user admin
    And   I am at the tasks page
    When  I choose todays date in the when input field
    And   I add "8" to the time spent field
    And   I add "The color of this register should be GREEN" to the note text area field
    And   I click on the save task button
    Then  A new task is added to the tasks panel
    And   This task must have a background color "#3c763d"
    Given I click on the delete button
    And   I confirm the deletion on the popup
    Then  The task must be removed from the tasks panel
    Then  I click on the sign out button
