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
    
        it('should search news by "Minsk" value', async function() {
            let globalNewsSearch = 'Minsk';
            await driver.get('https://www.euronews.com/');
            await driver.findElement(By.id('didomi-notice-agree-button')).click();
            await driver.findElement(By.xpath('//*[@id="search-autocomplete"]/div[1]/input')).sendKeys(globalNewsSearch);
            await driver.findElement(By.xpath('//*[@id="search-autocomplete"]/button')).click();
            expect(driver.findElement(By.xpath('//h1[@class="qa-section-title o-section__title o-section__new-header__title c-section__title ""]')).to.be.equal('MINSK'));
        });
    });