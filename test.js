let webdriverio = require('webdriverio');
let options = { desiredCapabilities: { browserName: 'chrome'} };
let client = webdriverio.remote(options);

client
    .init()
    .url('https://youtube.com')
    .setValue('#search-input #search', 'Morphine All Wrong')
    .keys('Enter')
    .pause(3000)
    .waitForVisible('[title="All Wrong - Morphine"]')
    .click('[title="All Wrong - Morphine"]')
    .pause(90000)
    .end();