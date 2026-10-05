# Web Application Test Automation & Quality Assurance

A portfolio-ready UI test automation project demonstrating Selenium WebDriver with **JavaScript and C#**, functional testing, regression testing, Page Object Model, assertions, and Git-based workflow.

## Application
A self-contained demo e-commerce web application is included under `webapp/`, so the tests do not depend on a third-party website.

## Project structure
- `webapp/` - demo application
- `tests-js/` - Selenium + JavaScript + Mocha/Chai automation
- `tests-csharp/` - Selenium + C# + NUnit automation
- `docs/` - test strategy and defect template

## JavaScript setup
Requirements: Node.js 18+ and Google Chrome.

```bash
cd tests-js
npm install
npm test
```

## C# setup
Requirements: .NET 8 SDK and Google Chrome.

```bash
cd tests-csharp
dotnet restore
dotnet test
```

Selenium Manager is used by the Selenium .NET binding to locate the Chrome driver where supported.

## Test coverage
- Valid login
- Invalid login
- Product search
- Add-to-cart
- Checkout
- Regression coverage for core workflows

## Interview topics
Be prepared to explain Page Object Model, locators, waits, assertions, regression suites, test isolation, test data, failure handling, and defect lifecycle.
