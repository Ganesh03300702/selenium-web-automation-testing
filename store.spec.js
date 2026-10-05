const {expect}=require("chai");
const {createDriver}=require("../driver");
const LoginPage=require("../pages/login.page");
const StorePage=require("../pages/store.page");

describe("Store - Regression Tests", function(){
  this.timeout(30000); let driver,store;
  const baseUrl="file://"+require("path").resolve(__dirname,"../../webapp/index.html");
  beforeEach(async()=>{driver=await createDriver();const login=new LoginPage(driver,baseUrl);await login.open();await login.login("testuser","Password123");store=new StorePage(driver);});
  afterEach(async()=>{if(driver) await driver.quit();});
  it("should search products",async()=>{await store.openProducts();await store.search("Laptop");expect(await store.productCount()).to.equal(1);});
  it("should add a product and checkout",async()=>{
    await store.openProducts();await store.addFirstProduct();await store.openCart();
    expect(await store.cartText()).to.contain("Laptop");await store.checkout();
    expect(await store.checkoutMessage()).to.equal("Order placed successfully");
  });
});
