var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  specs: ['../tests/shoesCatalog.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    reporter: 'spec'
  },

  onPrepare: async function() {
    await browser.waitForAngularEnabled(false);
    await browser.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './protractor_testing/reports',
        cleanDestination: false,
        fileName: 'testReport'
      })
      
    );

  }
};
