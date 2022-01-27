const {Builder,By,Key, until} = require("selenium-webdriver");
const { expect } = require('chai');
const webdriver = require('selenium-webdriver');
const chrome = require(`selenium-webdriver/chrome`);
const path = require(`chromedriver`).path;

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new webdriver.Builder()
.withCapabilities(webdriver.Capabilities.chrome())
.build();

describe('News Search', function() {

    beforeEach(async function() {
        await driver.manage().window().maximize();
    });

    after(async function() {
        await driver.quit();
   })
    
        it('should search news by "Minsk" value', async function() {
            let globalNewsSearch = 'Minsk';
            await driver.get('https://www.euronews.com/');
            await driver.findElement(By.id('didomi-notice-agree-button')).click();
            await driver.findElement(By.xpath('//*[@id="search-autocomplete"]/div[1]/input')).sendKeys(globalNewsSearch);
            await driver.findElement(By.xpath('//*[@id="search-autocomplete"]/button')).click();
            let title = await driver.findElement(By.className('qa-section-title o-section__title o-section__new-header__title c-section__title')).getText();
            expect(title).equal('MINSK');
        });

        it('should find the particular news on page', async function() {
            driver.executeScript('window.scrollTo(0, 5000);');
            driver.sleep(5000);
            await driver.findElement(By.xpath('//*[@id="enw-pagination-articles"]/ul/li[3]/a')).click();
            driver.sleep(5000);
            await driver.findElement(By.linkText('Belarus state airline Belavia and Turkey move to stop migrant flights')).click();
            driver.sleep(5000);
            driver.executeScript('window.scrollTo(0, 500);');
            driver.sleep(10000);
            await driver.findElement(By.xpath('//*[@id="jsMainMediaArticle-1730736"]/div[2]/div[11]/div[4]/div[2]/div[1]')).click();
            let articleTitle = await driver.findElement(By.css('[data-id="1730736"] .c-article-title')).getText();
            expect(articleTitle).equal('Belarus state airline Belavia and Turkey move to stop migrant flights');
        });
    });