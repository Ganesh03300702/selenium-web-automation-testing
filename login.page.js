class LoginPage {
  constructor(driver, baseUrl) { this.driver=driver; this.baseUrl=baseUrl; }
  async open(){ await this.driver.get(this.baseUrl+"#login"); }
  async login(username,password){
    await this.driver.findElement({css:"#username"}).sendKeys(username);
    await this.driver.findElement({css:"#password"}).sendKeys(password);
    await this.driver.findElement({css:"#login-btn"}).click();
  }
  async message(){ return await this.driver.findElement({css:"#login-message"}).getText(); }
}
module.exports = LoginPage;
