let webdriverio = require('webdriverio');
let options = { desiredCapabilities: { browserName: 'chrome'} };
let client = webdriverio.remote(options);

client
    .init()
    .url('https://youtube.com')
    .setValue('#search-input #search', 'Morphine All Wrong')
    .keys('Enter')
    .pause(3000)
    .waitForVisible("//div[@id='contents']//ytd-video-renderer[1]//div[1]//div[1]//div[1]//div[1]//h3[1]//a[1]")
    .click("//div[@id='contents']//ytd-video-renderer[1]//div[1]//div[1]//div[1]//div[1]//h3[1]//a[1]")
    .pause(90000)
    .end();