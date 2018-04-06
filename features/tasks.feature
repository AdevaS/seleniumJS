Feature: Testing the TASK PAGE for the Time Management System

  Scenario Outline: create a new task to validate the correct background color removing the register afterwards
    Given I am already logged as the user admin
    And   I am at the tasks page
    When  I choose todays date in the when input field
    And   I add <timespent> to the time spent field
    And   I add <note> to the note text area field
    And   I click on the save task button
    Then  A new task is added to the tasks panel
    And   This task must have a background color <color>
    Given I click on the delete button
    And   I confirm the deletion on the popup
    Then  The task must be removed from the tasks panel

  Examples:
  | timespent | note | color |
  | 7 | note1 | color1 |
  | 8 | note2 | color2 |
  | 9 | note3 | color3 |
# | 7 | The color of this register should be RED | #f2dede |
# | 8 | The color of this register should be GREEN | #3c763d |
# | 9 | The color of this register should also be GREEN | #3c763d |
