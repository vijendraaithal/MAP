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

    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'Google Pixel 8',
            'appium:platformVersion': '14.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': 'SauceLabsDemoAndroid',
            'bstack:options': {
                projectName: 'Mobile Automation Framework',
                buildName: 'Android Regression Suite',
                sessionName: 'Android Login - Pixel 8',
                debug: true,
                networkLogs: true
            }
        },
        {
            platformName: 'Android',
            'appium:deviceName': 'Samsung Galaxy S23',
            'appium:platformVersion': '13.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': 'SauceLabsDemoAndroid',
            'bstack:options': {
                projectName: 'Mobile Automation Framework',
                buildName: 'Android Regression Suite',
                sessionName: 'Android Login - Galaxy S23',
                debug: true,
                networkLogs: true
            }
        }
    ],

    port: 443,
    protocol: 'https',
    hostname: 'hub.browserstack.com'
});