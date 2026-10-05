# Test Strategy

## Scope
Functional and regression testing of login, product search, cart and checkout workflows.

## Test types
- Functional testing
- Negative testing
- Regression testing
- UI automation

## Example defects to discuss
1. Invalid credentials must show a clear error.
2. Checkout with an empty cart must not create an order.
3. Product search should filter results correctly.

## Quality practices
- Page Object Model
- Independent tests
- Assertions for business outcomes
- Headless execution for CI-friendly runs
- Version control with Git
