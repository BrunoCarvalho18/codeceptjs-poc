const jsonData = require('../data');

Feature('login');

Scenario('Login with success',  ({ I,loginPage}) => {

    
    loginPage.doLogin(jsonData.email,jsonData.senha)
    
    I.waitForElement("//XCUIElementTypeOther[@name='salvar']",5)

    I.seeElement("//XCUIElementTypeOther[@name='salvar']")

});

Scenario('Login with error',  ({ I }) => {


    //fill email field
    I.fillField("//XCUIElementTypeTextField[@name='email']", jsonData.email)


    I.fillField("//XCUIElementTypeSecureTextField[@name='senha']","12345")


    I.tap("//XCUIElementTypeOther[@name='entrar']")

    I.seeElement("//XCUIElementTypeStaticText[@name='lognFail']")

});
