const {Builder,By,Key, Actions, until} = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox'); 
const chrome = require('selenium-webdriver/chrome');

async function heroPortalSearch()

{
    let location = 'Minsk';
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('https://heroes.epam.com/');
    await driver.wait(until.elementLocated(By.className('uui-switch-body uui-checked'))).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('/html/body/div[1]/div[1]/div[2]/div[1]/div[1]')).click();
    await driver.findElement(By.xpath('/html/body/div[1]/div[1]/div[2]/div[2]/aside/div/div[1]/div/div[2]/div/div[2]/div/div[1]/input')).click();
    await driver.findElement(By.xpath('//*[@id="root"]/div[1]/div[2]/div[2]/aside/div/div[1]/div/div[2]/div/div[2]/div/div[1]/input')).sendKeys(location);
    await driver.sleep(2000);
    await driver.findElement(By.className('_26xvh -clickable _21Jx- -clickable _3t_0b')).click();

        
}

heroPortalSearch();