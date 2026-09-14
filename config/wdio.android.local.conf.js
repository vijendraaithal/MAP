const { config: baseConfig, safeMerge } = require('./wdio.base.conf');

exports.config = safeMerge(baseConfig, {
    specs: [
        '../test/specs/**/android/**/*.js'
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
        'appium:appWaitActivity': '*'
        // 'appium:appWaitDuration': 60000
    }],

    port: 4723
});