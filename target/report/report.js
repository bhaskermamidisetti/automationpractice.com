$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("automation-practice.feature");
formatter.feature({
  "line": 2,
  "name": "Ensure customer logs in to the site and  order the T-shirt successfully",
  "description": "\nAs a customer\nI want to login with my credentials\nSo I can order my Tshirt in the application",
  "id": "ensure-customer-logs-in-to-the-site-and--order-the-t-shirt-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AutomationPractice"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Verify a user can order the Tshirt",
  "description": "",
  "id": "ensure-customer-logs-in-to-the-site-and--order-the-t-shirt-successfully;verify-a-user-can-order-the-tshirt",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@order"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Launch automation practice in web",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "The user Signin with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Enter email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "The user click on Tshirts",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Place the Order for Tshirt",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.launchAutomationPractice()"
});
formatter.result({
  "duration": 19908930187,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.userSignIn()"
});
formatter.result({
  "duration": 24073294942,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enterEmailAndPassword()"
});
formatter.result({
  "duration": 15765568321,
  "status": "passed"
});
formatter.match({
  "location": "ProductPage.clickTshirtTab()"
});
formatter.result({
  "duration": 11717971934,
  "status": "passed"
});
formatter.match({
  "location": "ProductPage.placeTheOrderForTshirt()"
});
formatter.result({
  "duration": 11080838736,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To update the personal information",
  "description": "",
  "id": "ensure-customer-logs-in-to-the-site-and--order-the-t-shirt-successfully;to-update-the-personal-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@order"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "Launch automation practice in web",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The user Signin with credentials",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Enter email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Update the personal information",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Confirm personal information updated successfully",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.launchAutomationPractice()"
});
formatter.result({
  "duration": 21775141843,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.userSignIn()"
});
formatter.result({
  "duration": 25834852507,
  "status": "passed"
});
formatter.match({
  "location": "LoginPage.enterEmailAndPassword()"
});
formatter.result({
  "duration": 16146971879,
  "status": "passed"
});
formatter.match({
  "location": "ProductPage.updateThePersonalInformation()"
});
formatter.result({
  "duration": 23585019471,
  "status": "passed"
});
formatter.match({
  "location": "ProductPage.confirmPersonalInformationUpdatedSuccessfully()"
});
formatter.result({
  "duration": 24165909,
  "status": "passed"
});
});