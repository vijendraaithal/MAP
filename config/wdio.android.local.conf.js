const { config: baseConfig } = require('./wdio.base.conf');
const { deepmerge } = require('deepmerge-ts');

exports.config = deepmerge(baseConfig, {
    specs: [
        '../test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_9a',
        'appium:platformVersion': '16',
        'appium:automationName': 'UiAutomator2',
        'appium:app': require('path').join(process.cwd(), 'apps/android.apk'),
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 240,
        'appium:appWaitActivity': '*',
    }],

    port: 4723
});