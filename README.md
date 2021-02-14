Qualitest-TestAutomation-Cumcber-bdd- selenium

This is a framework design in Java for the test automation of Qualitest's web appliocation.
The framework has been designed using the Cumeber-BDD with Pageobject model to implement  the BDD approach.
Modules of the framework are designed in such a way that it can be reused
This framework will provide a Regression testing suite for Login,placeorder, and update the personal information also serve for Sanity,



Set Up

1. Clone it from this GitLab repository [https://github.com/bhaskermamidisetti)
2. Run `mvn veriy` from the project's root directory.at the end of the test pretty format cucumber results will be generated in target folder u can open my executed report for your refrence
 or right click on the feature files to run the test or use runner file
3. *  Browser Step :  install the appropriate browser and WebDriver executable
    * Current  tests are using Chrome , so attach the correct version
     [chromedriver](https://chromedriver.chromium.org/downloads)

Running Tests
1. Test Execution:
    - Use `mvn verify` command
    
    




