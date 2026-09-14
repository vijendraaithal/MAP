const { config: baseConfig } = require('./wdio.base.conf');
const { deepmerge } = require('deepmerge-ts');

exports.config = deepmerge(baseConfig, {
    specs: [
        '../test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        'appium:app': require('path').join(process.cwd(), 'apps/android.apk'),
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 240
    }],

    port: 4723
});