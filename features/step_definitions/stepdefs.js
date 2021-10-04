const { Given,When,Then } = require("@cucumber/cucumber");
const { By, until, Builder } = require("selenium-webdriver");
// const webdriver = require("selenium-webdriver");

module.exports= function(){};

    Given("user on home page", function () {
        console.log("Given step");
         //Open FFMS
         driver.get("https://stg-ffms.efishery.com/");
         driver.wait(until.elementLocated(By.className("css-2ouxmu ewaxuwa2")));
    });

    Given("user want to login with Google", async function () {
        console.log("And step");
        // var parent = driver.getWindowHandle();
         driver.findElement(By.className("css-2ouxmu ewaxuwa2")).click();
        // var windows = driver.getAllWindowHandles();
        // driver.wait(until.elementLocated(By.xpath("//input[@id='identifierId']")))
    //     driver.wait(async function() {
    //     driver.getAllWindowHandles().then(async function (handles) {
    //         // var isHandleCount2 = (handles.length == 2);
    //          if (handles.length > 1) {
    //              return driver.switchTo().window(handles[handles.length - 1]);
    //          }
    //          return false;
    //      });
    //  }).then(function () {
    //       driver.wait(until.elementLocated(By.xpath("//input[@id='identifierId']")));
    //       driver.findElement(By.xpath("//input[@id='identifierId']")).sendKeys("gilang.akbar@efishery.com");
    //       driver.findElement(By.id("identifierNext")).click();
    //       console.log("block");
    //  });
        await driver.sleep(10000);
        // var allWindow = driver.getAllWindowHandles();

        driver.getAllWindowHandles().then(function(handles){
            driver.switchTo().window(handles[1]).then(function(){
                driver.findElement(By.xpath("//input[@id='identifierId']")).sendKeys("gilang.akbar@efishery.com");
            });
        });

        //     // await driver.wait(until.elementLocated(By.xpath("//p[@class='css-1rkrwl1 ewaxuwa4']")), 5000);
        //     // await driver.switchTo().newWindow("//div[@class='kHn9Lb']");
        
        // console.log(allWindow);
        // allWindow.then(function(result){
        //     console.log(result)
        // });

        // await driver.sleep(5000);
        // driver.switchTo().window(allWindow[0]);
        // driver.getTitle(allWindow).then(function(titleNew){
        //     console.log(titleNew);
        // });
        
        //     await driver.wait(until.elementLocated(By.xpath("//input[@id='identifierId']")), 5000);
        // driver.getAllWindowHandles().then(async (allhandles) => {
        //     return await driver.switchTo().window(allhandles[0]);
        // });
            await driver.sleep(5000);
            // await driver.wait(until.ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.xpath("//div[contains(@class,'Lth2jb')]")), 20);
            driver.findElement(By.xpath("//input[@id='identifierId']")).sendKeys("gilang.akbar@efishery.com");
            // await driver.findElement(By.id("identifierNext")).click();
            // await driver.sleep(2000);
            // await driver.findElement(By.id("passwordNext")).click();

            // //Allow access
            // await driver.sleep(2000);
            // await driver.findElement(By.id("submit_approve_access")).click();
    });
          

        // var childWindows = driver.getAllWindowHandles();
        // console.log(driver.switchTo().window(childWindows[0]).getTitle());
        // console.log(driver.switchTo().window(childWindows[1]).getTitle());
    
    When("user fill username and password", function () {
        console.log("When step");
        // var allWindow = driver.getAllWindowHandles();
        driver.switchTo().window(driver.getAllWindowHandles()[1]);
        driver.findElement(By.xpath("//input[@id='identifierId']")).sendKeys("gilang.akbar@efishery.com");
        console.log("masuk");
    });

    
    When("user click button login", function () {
        console.log("And step");
      });  

    Then("verify user successfully login", function () {
        console.log("Then step");
        });  