require('dotenv').config();
const { config: baseConfig, safeMerge } = require('./wdio.base.conf');

exports.config = safeMerge(baseConfig, {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    specs: [
        '../test/specs/**/ios/**/*.js'
    ],

    maxInstances: 2,

    services: [
        ['browserstack', {
            testObservability: true
        }]
    ],

    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 15',
        'appium:platformVersion': '17',
        'appium:automationName': 'XCUITest',
        'appium:app': 'SauceLabsDemoIOS',
        'bstack:options': {
            projectName: 'Mobile Automation Framework',
            buildName: 'iOS Smoke Suite',
            sessionName: 'iOS Login Smoke',
            debug: true,
            networkLogs: true
        }
    }],

    port: 443,
    protocol: 'https',
    hostname: 'hub.browserstack.com'
});