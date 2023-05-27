const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

 // Replace with the name of the file you want to read

 const path = require('path');
 const resolvedPath = path.resolve(process.env.APP);
 console.log("path resolver: "+resolvedPath);
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: process.env.PLATFORM,
      app: resolvedPath,
      desiredCapabilities: {
        automationName: process.env.AUTOMATION,
        platformVersion: process.env.VERSION,
        appPackage: process.env.PLATFORM == "Android" ? process.env.PACKAGE: "",
        appActivity: process.env.PLATFORM == "Android" ?  process.env.ACTIVITY: "",
        deviceName: process.env.DEVICE
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'poc-automation'
}