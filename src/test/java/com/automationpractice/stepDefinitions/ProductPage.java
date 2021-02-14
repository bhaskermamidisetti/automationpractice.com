package com.automationpractice.stepDefinitions;

import com.automationpractice.Base.AbstractSteps;
import cucumber.api.java.en.And;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import static com.automationpractice.PageClass.LoginPageObjects.tshirt;
import static com.automationpractice.PageClass.ProductPageObjects.*;

public class ProductPage extends AbstractSteps {

    public ProductPage() {
    }

    @And("^The user click on Tshirts$")
    public void clickTshirtTab() throws Exception {
        driver.findElement(By.xpath(tshirt)).click();
        Thread.sleep(4000);
    }

    @And("^Place the Order for Tshirt$")
    public void placeTheOrderForTshirt() throws InterruptedException {
        WebElement element = driver.findElement(By.xpath(productimagelink));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", element);
        Thread.sleep(4000);
        driver.findElement(By.id(addtoCart)).click();
    }

    @And("^Update the personal information$")
    public void updateThePersonalInformation() throws InterruptedException {
        WebElement element = driver.findElement(By.xpath(accountadetails));
        //in order to click a non visible element
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", element);
        Thread.sleep(2000);
        driver.findElement(By.className(personalInformation)).click();
        Thread.sleep(1000);
        driver.findElement(By.xpath(firstname)).sendKeys("bhaskerM");
        driver.findElement(By.name(currentpassword)).sendKeys("flower123");
        driver.findElement(By.id(newpassword)).sendKeys("flower123");
        driver.findElement(By.name(confirmpassword)).sendKeys("flower123");
        driver.findElement(By.name(savebutton)).click();
    }

    @And("^Confirm personal information updated successfully$")
    public void confirmPersonalInformationUpdatedSuccessfully() {
        WebElement webElement = driver.findElement(By.xpath(sucessAlertValidation));
        String expectedText = "Your personal information has been successfully updated.";
        Assert.assertEquals(webElement.getText(), expectedText);
    }
}