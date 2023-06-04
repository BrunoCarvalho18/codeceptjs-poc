const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// Replace with the name of the file you want to read

const path = require('path');
const resolvedPath = path.resolve('app/qazandoapp.app');
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'iOS',
      app: resolvedPath,
      desiredCapabilities: {
        automationName: 'XCUITest',
        platformVersion: '16.4',
        deviceName: 'iPhone 14 Pro'
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login.js"
  },
  name: 'poc-automation'
}