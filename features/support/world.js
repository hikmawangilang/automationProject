var seleniumWebdriver = require('selenium-webdriver');
// const { Given, When, Then } = require('@cucumber/cucumber');
// var chrome = require('selenium-webdriver/chrome');
var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

function CustomWorld() {

    // this.attach = attach;

    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();

    // // Returns a promise that resolves to the element
    // this.waitForElement = function (locator) {
    //     var condition = seleniumWebdriver.until.elementLocated({xpath: locator});
    //     return this.driver.wait(condition)
    // }
}

CustomWorld();

