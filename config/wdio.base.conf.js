const { deepmergeCustom } = require('deepmerge-ts');

const safeMerge = deepmergeCustom({ mergeArrays: false });

exports.config = {
    runner: 'local',

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

exports.safeMerge = safeMerge;