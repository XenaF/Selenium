 describe('find womens shoes in the catalog', function(){

    it('filter by womens shoes', function(){
        browser.get('https://www.dsw.com/en/us/');
        browser.sleep(2000);
        element(by.xpath('//a[3]')).click();
        element(by.xpath('//a[contains(.,"All Women\'s Boots")]')).click();
        let title = element(by.id('result-list-toolbar-left-header'));
        expect(title.getText()).toEqual('ALL WOMEN\'S BOOTS');
    
    });

    it('filter by conditions', function(){
        element(by.xpath('//*[@id="tabpanel-exposed-filter-size"]/div/app-select-box/div/button[2]')).click();
        element(by.xpath('//*[@id="exposed-filter-color-accordion"]/label')).click();
        element(by.xpath('//*[@id="tabpanel-exposed-filter-color"]/div/div/app-dsw-checkbox[1]/div/label/div[1]')).click();
        let filterResult = element.all(by.className('active-filters__filter__label'));
        expect(filterResult.getText()).toEqual(["Black", "3"]);
    });

    // it('quick add into bag pop up is displayed', function(){
    //    element(by.className('button button__secondary quick-add-btn')).click();
    //    expect(element(by.xpath('//*[@id="qa-modal"]/div[2]/div')).isDisplayed()).toBeTruthy();
    // });

    it('My bag page is displayed', function(){
        browser.sleep(200);
        element(by.xpath('//*[@id="product-tile-498503"]/div/a/app-picture/picture/img')).click();
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0, 700);');
        browser.sleep(200);
        element(by.xpath('//*[@id="pdp-attributes"]/div[3]')).click();
        browser.sleep(3000);
        // element(by.css('div[aria-label="Item added to bag"]>div:nth-of-type(8)>button')).click();
        // expect(element(by.className('product-module__details')).isDisplayed()).toBeTruthy();
     });


 });

 
  