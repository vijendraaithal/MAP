require('dotenv').config();
const { config: baseConfig, safeMerge } = require('./wdio.base.conf');

exports.config = safeMerge(baseConfig, {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    specs: [
        '../test/specs/**/android/**/*.js'
    ],

    maxInstances: 2,

    services: [
        ['browserstack', {
            testObservability: true
        }]
    ],

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Google Pixel 8',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://SauceLabsDemoAndroid',
        'bstack:options': {
            projectName: 'Mobile Automation Framework',
            buildName: 'Android Smoke Suite',
            sessionName: 'Android Login Smoke',
            debug: true,
            networkLogs: true
        }
    }],

    port: 443,
    protocol: 'https',
    hostname: 'hub.browserstack.com'
});