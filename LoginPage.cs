using OpenQA.Selenium;
namespace WebAppTests.Pages;
public class LoginPage {
    private readonly IWebDriver driver;
    public LoginPage(IWebDriver driver){this.driver=driver;}
    public void Login(string username,string password){
        driver.FindElement(By.Id("username")).SendKeys(username);
        driver.FindElement(By.Id("password")).SendKeys(password);
        driver.FindElement(By.Id("login-btn")).Click();
    }
    public string Message => driver.FindElement(By.Id("login-message")).Text;
}
