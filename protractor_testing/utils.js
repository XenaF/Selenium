const { browser } = require("protractor");

async function scrollToElement(element) {
  await browser.controlFlow().execute(async () => {
      await browser.executeScript('arguments[0].scrollIntoView(true)', element);
  })
  await browser.sleep(1000);
}

module.exports = {
  scrollToElement
}