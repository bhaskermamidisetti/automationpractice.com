package com.automationpractice.stepDefinitions;

import com.automationpractice.Base.AbstractSteps;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import static com.automationpractice.PageClass.LoginPageObjects.*;

public class LoginPage extends AbstractSteps {

    @And("^Launch automation practice in web$")
    public void launchAutomationPractice() throws Exception {
        getDriver();
    }

    @And("^The user Signin with credentials$")
    public void userSignIn() throws Exception {

        driver.findElement(By.className(SignInlink)).click();
        Thread.sleep(5000);
    }

    @Then("^Enter email and password$")
    public void enterEmailAndPassword() throws InterruptedException {
        driver.findElement(By.id(email)).sendKeys("bhasker.prf@gmail.com");
        driver.findElement(By.id(password)).sendKeys("flower123");
        driver.findElement(By.id(signinButton)).click();
        Thread.sleep(4000);
    }
}