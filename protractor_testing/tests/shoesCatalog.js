const { browser, by, element } = require('protractor');
const { scrollToElement } = require('../utils');
 
 describe('find womens shoes in the catalog', function(){
    it('filter by women shoes', async function() {
        await browser.get('https://www.dsw.com/en/us/');
        await browser.sleep(5000);
        await element(by.xpath('//nav[@id="megaNavList"]/a[contains(.,"Women")]')).click();
        await browser.sleep(5000);
        await element(by.xpath('//a[contains(.,"All Women\'s Shoes")]')).click();
        await browser.sleep(5000);
        let title = await element(by.id('result-list-toolbar-left-header'));
        expect(title.getText()).toEqual('WOMEN\'S SHOES');
    });

     
    it('filter by conditions', async function() {
        await element(by.xpath('//button[3]/span[@class="ng-star-inserted"]')).click();
        const colorFilterButton = await element(by.xpath('//h4[@id="title-exposed-filter-color"]'));
        await scrollToElement(colorFilterButton);
        await colorFilterButton.click();
        await browser.sleep(500);
        await element(by.xpath('//span[.="Black"]')).click();
        await browser.sleep(5000);
        let filterResult = await element.all(by.className('active-filters__filter__label'));
        expect(filterResult[0].getText()).toEqual("Black");
        expect(filterResult[1].getText()).toEqual("3");
    });

    it('My bag page is displayed', async function() {
        await browser.sleep(800);
        await element(by.css('[src="https://images.dsw.com/is/image/DSWShoes/512085_001_ss_01?impolicy=colpg&imwidth=800&imdensity=1"]')).click();
        await browser.sleep(5000);
        const addToBagButton = await element(by.xpath('(//*[@id="pdp-attributes"]/div[3])[2]'));
        await scrollToElement(addToBagButton);
        await browser.sleep(2000);
        await addToBagButton.click();
        await browser.sleep(26000);
        await element(by.buttonText('REVIEW BAG AND CHECKOUT')).click();
        await browser.sleep(5000);
        let bagTitle = await element(by.className('title3 checkout-banner__title'));
        expect(bagTitle.getText()).toEqual('MY BAG');
        expect(element(by.className('product-module__details')).isDisplayed()).toBeTruthy();
     });


     it('Paypal non-Angular action', async function() {
        await browser.sleep(200);
        await element(by.xpath('//*[@id="mainContainer"]/app-cart-checkout-routing/div/app-shopping-bag/div/div/div/div[3]/div/app-paypal-express-button/button')).click();
        await browser.sleep(5000);
        await browser.sleep(10000);
        await element(by.linkText('Cancel and return to DSW')).click();
        await browser.sleep(10000);
        let payPalTitle = await element(by.className('title3 checkout-banner__title'));
        await browser.sleep(300);
        expect(payPalTitle.getText()).toEqual('MY BAG');
     });

 });

 
  