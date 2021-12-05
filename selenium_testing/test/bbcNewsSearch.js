const {Builder,By,Key, Actions, until, window} = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox'); 
const chrome = require('selenium-webdriver/chrome');

async function bbcNewsSearch()

{   // define the search that will be used in the further verification
    let globalNewsSearch = 'Minsk';

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('https://www.euronews.com/');

    //Accept cookies
    await driver.findElement(By.id('didomi-notice-agree-button')).click();

    //Search 'news' in Search field
    await driver.findElement(By.xpath('//*[@id="search-autocomplete"]/div[1]/input')).sendKeys(globalNewsSearch);
    await driver.findElement(By.xpath('//*[@id="search-autocomplete"]/button')).click();

    //scroll to the bottom of the page to switch on the second page
    driver.executeScript('window.scrollTo(0, 5000);');
    await driver.findElement(By.xpath('//*[@id="enw-pagination-articles"]/ul/li[2]/a')).click();

    //Open the article
    await driver.findElement(By.linkText('Belarus state airline Belavia and Turkey move to stop migrant flights')).click();

    //scroll to the video content
    driver.executeScript('window.scrollTo(0, 500);');

    //wait till the video will be launched
    await driver.sleep(1500);

    // pause the video add
    await driver.findElement(By.xpath('//*[@id="jsMainMediaArticle-1730736"]/div[2]/div[11]/div[4]/div[2]/div[1]')).click();
        
}

bbcNewsSearch();