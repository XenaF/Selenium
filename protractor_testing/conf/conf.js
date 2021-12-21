var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: true,


  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/shoesCatalog.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
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
