using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using WebAppTests.Pages;

namespace WebAppTests;

public class LoginTests {
    private IWebDriver driver = null!;
    private string BaseUrl => "file:///" + Path.GetFullPath(Path.Combine(TestContext.CurrentContext.TestDirectory,"../../../../webapp/index.html")).Replace("\\","/");
    [SetUp] public void Setup(){ var o=new ChromeOptions(); o.AddArgument("--headless=new"); o.AddArgument("--window-size=1440,1000"); driver=new ChromeDriver(o); driver.Navigate().GoToUrl(BaseUrl); }
    [TearDown] public void TearDown(){driver.Quit();}
    [Test] public void ValidLogin(){var p=new LoginPage(driver);p.Login("testuser","Password123");Assert.That(p.Message,Is.EqualTo("Login successful"));}
    [Test] public void InvalidLogin(){var p=new LoginPage(driver);p.Login("wrong","wrong");Assert.That(p.Message,Is.EqualTo("Invalid username or password"));}
}
