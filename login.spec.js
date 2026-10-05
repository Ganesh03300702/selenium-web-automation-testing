const {expect}=require("chai");
const {createDriver}=require("../driver");
const LoginPage=require("../pages/login.page");

describe("Login - Functional Tests", function(){
  this.timeout(30000); let driver,page;
  const baseUrl="file://"+require("path").resolve(__dirname,"../../webapp/index.html");
  beforeEach(async()=>{driver=await createDriver();page=new LoginPage(driver,baseUrl);await page.open();});
  afterEach(async()=>{if(driver) await driver.quit();});
  it("should login with valid credentials",async()=>{
    await page.login("testuser","Password123"); expect(await page.message()).to.equal("Login successful");
  });
  it("should reject invalid credentials",async()=>{
    await page.login("wrong","wrong"); expect(await page.message()).to.equal("Invalid username or password");
  });
});
