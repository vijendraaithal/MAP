exports.config = {
    runner: 'local',

    // NOTE: no `specs` or `capabilities` here — each env-specific config
    // (wdio.android.local.conf.js, wdio.ios.local.conf.js, etc.) sets its own
    // `specs`/`suites` selection and `capabilities`, then merges this base in.

    exclude: [],

    logLevel: 'info',
    bail: 0,

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],

    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    reporters: [
        'spec',
        ['allure', { outputDir: 'reports/allure-results' }]
    ],

    // Suite groupings — referenced later via --suite smoke / sanity / regression
    suites: {
        smoke: [],
        sanity: [],
        regression: []
    },

    afterTest: async function (test, context, { passed }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};