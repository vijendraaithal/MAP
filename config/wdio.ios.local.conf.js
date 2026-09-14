const { config: baseConfig } = require('./wdio.base.conf');
const { deepmerge } = require('deepmerge-ts');

exports.config = deepmerge(baseConfig, {
    specs: [
        '../test/specs/**/ios/**/*.js'
    ],
    maxInstances: 1,

    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 17',
        'appium:platformVersion': '26.1',
        'appium:automationName': 'XCUITest',
        'appium:app': require('path').join(process.cwd(), 'apps/ios-simulator/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.app'),
        'appium:udid': '1E753D4F-55D1-4343-91CC-FAFAE52464AB',
        'appium:newCommandTimeout': 240
    }],

    port: 4723
});