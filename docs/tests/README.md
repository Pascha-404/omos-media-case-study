# Testing

This directory contains all the tests for the project, including both end-to-end (E2E) tests and unit tests.

## E2E Tests

End-to-end tests are used to test the functionality of the entire application by simulating user interactions. These tests are written using Cypress.

### E2E Test Files

- **buttonInjection_spec.cy.ts**: Tests the functionality of button injections.
- **dateTimeInjection_spec.cy.ts**: Tests the functionality of the `DateTimeInjector` component.
- **dynamicTextInjector.cy.ts**: Tests the functionality of the `DynamicTextInjector` component.
- **textInjection_spec.cy.ts**: Tests the functionality of text injections.

### Running E2E Tests

To run the E2E tests, use the following command:

```bash
npm run test:e2e
```

To run the E2E tests in development mode, use the following command:

```bash
npm run test:e2e:dev
```

## Unit Tests

Unit tests are used to test individual components and utility functions in isolation. These tests are written using Jest and Vue Test Utils.

### Unit Test Files

- **DateTimeInjector.spec.ts**: Tests the `DateTimeInjector` component.
- **DynamicTextInjector.spec.ts**: Tests the `DynamicTextInjector` component.
- **injectionsUtils.spec.ts**: Tests the utility functions used for injections.
- **TextInjector.spec.ts**: Tests the `TextInjector` component.

### Running Unit Tests

To run the unit tests, use the following command:

```bash
npm run test:unit
```

## Directory Structure

```plaintext
tests/
├── e2e
│   ├── buttonInjection_spec.cy.ts
│   ├── dateTimeInjection_spec.cy.ts
│   ├── dynamicTextInjector.cy.ts
│   └── textInjection_spec.cy.ts
└── unit
    ├── DateTimeInjector.spec.ts
    ├── DynamicTextInjector.spec.ts
    ├── injectionsUtils.spec.ts
    └── TextInjector.spec.ts
```

## Writing Tests

### E2E Tests

E2E tests are written using Cypress. Each test file in the `e2e` directory corresponds to a specific feature or component of the application. These tests simulate user interactions and verify the application's behavior.

### Unit Tests

Unit tests are written using Jest and Vue Test Utils. Each test file in the `unit` directory corresponds to a specific component or utility function. These tests verify the functionality of individual units of code in isolation.

## Example Test

### E2E Test

**dynamicTextInjector.cy.ts**

```typescript
describe('DynamicTextInjector Component', () => {
  it('should update the text based on input value', () => {
    cy.visit('/'); // Replace with the actual URL or path to your app
    cy.get('input[data-pf-type="QuantityField"]').clear().type('2');
    cy.get('p').should('contain.text', 'Current total 3 more items');
  });
});
```

### Unit Test

**DynamicTextInjector.spec.ts**

```typescript
import { shallowMount } from '@vue/test-utils';
import DynamicTextInjector from '@/components/DynamicTextInjector.vue';

describe('DynamicTextInjector.vue', () => {
  it('renders props.initialText when passed', () => {
    const initialText = 'Please select between 1 and 5 products: Current total {count} more items';
    const wrapper = shallowMount(DynamicTextInjector, {
      props: { initialText, linkedInputSelector: 'data-pf-type', linkedInputSelectorValue: 'QuantityField' }
    });
    expect(wrapper.text()).toMatch('Current total 4 more items');
  });
});
```

## Conclusion

This documentation provides an overview of the tests included in this project, along with instructions for running and writing tests. By maintaining a comprehensive suite of tests, we can ensure the reliability and correctness of our application.
