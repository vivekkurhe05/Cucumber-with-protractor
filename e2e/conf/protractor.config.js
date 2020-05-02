let directConnectFlag = true
const execSync = require('child_process').execSync
const globalNodeModules = execSync('npm root -g').toString('utf8').trim().replace(/\s/g, '_')

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    chromeDriver: globalNodeModules + '/protractor/node_modules/webdriver-manager/selenium/chromedriver',
    directConnect: directConnectFlag,
    getPageTimeout: 50000,
    allScriptsTimeout: 50000,
    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
         'browserName': 'chrome'
    },
    specs: [
        '../tests/cucumber/feature/navigation.feature'
    ],

    cucumberOpts: {
        require: '../tests/cucumber/feature/stepDefinition/imdb.spec.js',
        tags: false,
        profile: false,
        'no-source': true
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    }
};
