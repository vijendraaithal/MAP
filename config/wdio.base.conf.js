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
    timeout: 60000,
  },

  reporters: [
    'spec',
    ['allure', { outputDir: 'reports/allure-results' }],
    [
      'junit',
      {
        outputDir: 'reports/junit-results',
        outputFileFormat: function (options) {
          return `results-${options.cid}.xml`;
        },
      },
    ],
  ],

  suites: {
    androidSmoke: ['../test/specs/smoke/android/**/*.js'],
    androidSanity: ['../test/specs/sanity/android/**/*.js'],
    androidRegression: [
      '../test/specs/smoke/android/**/*.js',
      '../test/specs/sanity/android/**/*.js',
      '../test/specs/regression/android/**/*.js',
    ],
    iosSmoke: ['../test/specs/smoke/ios/**/*.js'],
    iosSanity: ['../test/specs/sanity/ios/**/*.js'],
    iosRegression: [
      '../test/specs/smoke/ios/**/*.js',
      '../test/specs/sanity/ios/**/*.js',
      '../test/specs/regression/ios/**/*.js',
    ],
  },

  afterTest: async function (test, context, { passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};

exports.safeMerge = safeMerge;
