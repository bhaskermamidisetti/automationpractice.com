@AutomationPractice
Feature: Ensure customer logs in to the site and  order the T-shirt successfully

  As a customer
  I want to login with my credentials
  So I can order my Tshirt in the application

  @order
  Scenario: Verify a user can order the Tshirt

    Given Launch automation practice in web
    When The user Signin with credentials
    Then Enter email and password
    And The user click on Tshirts
    And Place the Order for Tshirt

  @order
  Scenario: To update the personal information
    Given Launch automation practice in web
    When The user Signin with credentials
    Then Enter email and password
    And Update the personal information
    And Confirm personal information updated successfully

