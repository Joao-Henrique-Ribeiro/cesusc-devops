const chrome = require('selenium-webdriver/chrome');
const options = new chrome.Options();
options.addArguments('--headless');
const driver = await new Builder()

.forBrowser('chrome')
.setChromeOptions(options)
.build();