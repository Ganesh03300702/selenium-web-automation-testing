class StorePage {
  constructor(driver){this.driver=driver;}
  async openProducts(){await this.driver.findElement({css:"#nav-products"}).click();}
  async search(text){const e=await this.driver.findElement({css:"#search"});await e.clear();await e.sendKeys(text);}
  async productCount(){return (await this.driver.findElements({css:".product"})).length;}
  async addFirstProduct(){await this.driver.findElement({css:".add-btn"}).click();}
  async openCart(){await this.driver.findElement({css:"#nav-cart"}).click();}
  async cartText(){return await this.driver.findElement({css:"#cart-list"}).getText();}
  async checkout(){await this.driver.findElement({css:"#checkout-btn"}).click();}
  async checkoutMessage(){return await this.driver.findElement({css:"#checkout-message"}).getText();}
}
module.exports = StorePage;
