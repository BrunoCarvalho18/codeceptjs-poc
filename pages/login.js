const { I } = inject();

module.exports = {


  fields:{
     email: '//XCUIElementTypeTextField[@name="email"]',
     password: '//XCUIElementTypeSecureTextField[@name="senha"]'  
  },

  buttons:{
    entrar: '//XCUIElementTypeOther[@name="entrar"]'
  },

  doLogin(email,password){
    I.fillField(this.fields.email,email)
    I.fillField(this.fields.password,password)
    I.tap(this.buttons.entrar)
  } 
  
}
