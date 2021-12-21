const {Builder,By,Key, until} = require("selenium-webdriver");


async function bbcNewsSearch() {

    let globalNewsSearch = 'Minsk';
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    await driver.get('https://www.euronews.com/');
    await driver.findElement(By.id('didomi-notice-agree-button')).click();
    await driver.findElement(By.xpath('//*[@id="search-autocomplete"]/div[1]/input')).sendKeys(globalNewsSearch);
    await driver.findElement(By.xpath('//*[@id="search-autocomplete"]/button')).click();
    driver.executeScript('window.scrollTo(0, 5000);');
    await driver.findElement(By.xpath('//*[@id="enw-pagination-articles"]/ul/li[2]/a')).click();
    await driver.findElement(By.linkText('Belarus state airline Belavia and Turkey move to stop migrant flights')).click();
    driver.executeScript('window.scrollTo(0, 500);');
    await driver.findElement(By.xpath('//*[@id="jsMainMediaArticle-1730736"]/div[2]/div[11]/div[4]/div[2]/div[1]')).click();    
}

bbcNewsSearch();