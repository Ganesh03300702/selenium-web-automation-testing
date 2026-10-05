const {Builder} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

async function createDriver() {
  const options = new chrome.Options();
  if (process.env.HEADLESS !== "false") options.addArguments("--headless=new");
  options.addArguments("--window-size=1440,1000");
  return await new Builder().forBrowser("chrome").setChromeOptions(options).build();
}
module.exports = {createDriver};
