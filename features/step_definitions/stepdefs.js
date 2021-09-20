// var seleniumWebdriver = require('selenium-webdriver');
const { Given, When, Then } = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver');
// var {defineSupportCode} = require('@cucumber/cucumber');

    Given('Open FFMS App', async function () {
         //Open FFMS
         driver.get("https://stg-ffms.efishery.com/");
    });

    Given('Login via Google',async function () {   
            driver.findElement(webdriver.By.className("css-2ouxmu ewaxuwa2")).click();
            driver.sleep(10000)

            var allWindow = driver.getAllWindowHandles();
            driver.switchTo().window(allWindow[1]);
            driver.findElement(webdriver.By.xpath("//input[@id='identifierId']")).sendKeys("gilang.akbar@efishery.com");
            driver.findElement(webdriver.By.id("identifierNext")).click();
            driver.sleep(2000);
            driver.findElement(webdriver.By.xpath("//input[@name='password']")).sendKeys("ini password");
            driver.findElement(webdriver.By.id("passwordNext")).click();

            //Allow access
            driver.sleep(2000);
            driver.findElement(webdriver.By.id("submit_approve_access")).click();
    });


    Then('I click on CLI', function () {
        // return this.driver.findElement({linkText: text}).then(function (element) {
        //     return element.click();
        // });
    });

    // Then('I should see {stringInDoubleQuotes}', function (text) {
    //     var xpath = "//*[contains(text(),'" + text + "')]";
    //     //var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    //     //return this.driver.wait(condition, 5000);
    //     return this.waitForElement(xpath);
    // });