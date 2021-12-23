const {Builder,By,Key, until} = require("selenium-webdriver");
const { expect } = require('chai');
var webdriver = require('selenium-webdriver');

async function bbcNewsSearch() {


    beforeEach(async function() {
        let driver = await new webdriver.Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
    });
    

    describe('News Search', function() {
        it('should search news by "Minsk" value', async function() {
            let globalNewsSearch = 'Minsk';
            await driver.get('https://www.euronews.com/');
            await driver.findElement(By.id('didomi-notice-agree-button')).click();
            await driver.findElement(By.xpath('//*[@id="search-autocomplete"]/div[1]/input')).sendKeys(globalNewsSearch);
            await driver.findElement(By.xpath('//*[@id="search-autocomplete"]/button')).click();
            expect(driver.findElement(By.xpath('//h1[@class="qa-section-title o-section__title o-section__new-header__title c-section__title ""]')).to.be.equal('MINSK'));
        });
    });
    


   


    // driver.executeScript('window.scrollTo(0, 5000);');
    // driver.sleep(5000);
    // await driver.findElement(By.xpath('//*[@id="enw-pagination-articles"]/ul/li[2]/a')).click();
    // driver.sleep(5000);
    // await driver.findElement(By.linkText('Belarus state airline Belavia and Turkey move to stop migrant flights')).click();
    // driver.sleep(5000);
    // driver.executeScript('window.scrollTo(0, 500);');
    // driver.sleep(5000);
    // await driver.findElement(By.xpath('//*[@id="jsMainMediaArticle-1730736"]/div[2]/div[11]/div[4]/div[2]/div[1]')).click();    
}

bbcNewsSearch();