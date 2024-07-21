# DynamicTextInjector Tests

This document provides an overview of the unit and end-to-end (E2E) tests for the `DynamicTextInjector` component. The `DynamicTextInjector` component dynamically updates a text element based on the value of an input element.

## Unit Tests

Unit tests are written using Vue Test Utils and Vitest. They verify the functionality of the `DynamicTextInjector` component in isolation.

### Test File

**Location**: `src/components/__tests__/DynamicTextInjector.spec.ts`

### Test Description

#### Test 1: Renders the initial text correctly

- **Description**: This test checks if the `DynamicTextInjector` component renders the initial text correctly with the placeholder replaced by the calculated value.
- **Test Code**:

```typescript
import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import DynamicTextInjector from '../DynamicTextInjector.vue';

describe('DynamicTextInjector', () => {
    let mockInput: HTMLInputElement;

    beforeEach(() => {
        document.body.innerHTML = `
      <input class="sc-bnOPBZ bwJNhh pf-43_" min="1" max="50" type="number" 
             data-hidespinner="false" name="quantity" data-variants-continue="" 
             data-pf-type="QuantityField" value="1">
    `;
        mockInput = document.querySelector(
            'input[data-pf-type="QuantityField"]'
        ) as HTMLInputElement;
    });

    it('renders the initial text correctly', () => {
        const wrapper = mount(DynamicTextInjector, {
            props: {
                text:
                    'Please select between 1 and 5 products: Current total {count} more items',
                dynamicPlaceholder: '{count}',
                maxCount: 5,
                linkedInput: { selector: 'data-pf-type', value: 'QuantityField' },
            },
        });

        expect(wrapper.text()).toContain('Current total 4 more items');
    });

    it('updates the text when input value changes', async () => {
        const wrapper = mount(DynamicTextInjector, {
            props: {
                text:
                    'Please select between 1 and 5 products: Current total {count} more items',
                dynamicPlaceholder: '{count}',
                maxCount: 5,
                linkedInput: { selector: 'data-pf-type', value: 'QuantityField' },
            },
        });

        // Simulate changing the input value
        mockInput.value = '2';
        mockInput.dispatchEvent(new Event('input'));

        // Wait for Vue to update the DOM
        await wrapper.vm.$nextTick();

        expect(wrapper.text()).toContain('Current total 3 more items');
    });
});
```

## E2E Tests

E2E tests are written using Cypress. They verify the functionality of the `DynamicTextInjector` component in a real browser environment by simulating user interactions.

### Test File

**Location**: `cypress/e2e/dynamicTextInjector.cy.ts`

### Test Description

#### Test 1: Renders the initial text correctly

- **Description**: This test checks if the `DynamicTextInjector` component renders the initial text correctly with the placeholder replaced by the calculated value.
- **Test Code**:

```typescript
describe('DynamicTextInjector E2E Test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('renders the initial text correctly', () => {
        cy.get('p[data-test="dynamicTextInjection"]').should(
            'contain.text',
            'Aktuelle Gesamtmenge 4 weitere Artikel'
        );
    });

    it('updates the text when input value changes', () => {
        // Change input value to 2
        cy.get('input[data-pf-type="QuantityField"]').clear();
        cy.get('input[data-pf-type="QuantityField"]').type('2');
        cy.get('p[data-test="dynamicTextInjection"]').should(
            'contain.text',
            'Aktuelle Gesamtmenge 3 weitere Artikel'
        );

        // Change input value to 5
        cy.get('input[data-pf-type="QuantityField"]').clear();
        cy.get('input[data-pf-type="QuantityField"]').type('5');
        cy.get('p[data-test="dynamicTextInjection"]').should(
            'contain.text',
            'Aktuelle Gesamtmenge 0 weitere Artikel'
        );
    });
});
```

## Running the Tests

### Running Unit Tests

To run the unit tests, use the following command:

```bash
npm run test:unit
```

### Running E2E Tests

To run the E2E tests, use the following command:

```bash
npm run test:e2e
```

To run the E2E tests in development mode, use the following command:

```bash
npm run test:e2e:dev
```

By maintaining a comprehensive suite of tests, we can ensure the reliability and correctness of the `DynamicTextInjector` component.
