# ButtonInjection Tests

This document provides information about the unit tests and end-to-end (E2E) tests for the `ButtonInjection` component.

## Unit Test

The unit test checks if the `ButtonInjection` component correctly updates the attributes and text of the target button element.

```typescript
import { mount } from '@vue/test-utils';
import ButtonInjection from '../ButtonInjection.vue';

describe('ButtonInjection.vue', () => {
    const selector = { attribute: 'name', value: 'add' };
    const newAttributes = {
        id: 'new-button-id',
        class: 'new-button-class',
        'data-custom': 'custom-value',
    };
    const text = 'New Button Text';

    it('should update attributes and text of the target element', async () => {
        document.body.innerHTML = '<button name="add">Old Button Text</button>';

        mount(ButtonInjection, {
            props: { selector, newAttributes, text },
        });

        const button = document.querySelector('button[name="add"]') as HTMLElement;

        expect(button).not.toBeNull();
        expect(button.getAttribute('id')).toBe('new-button-id');
        expect(button.getAttribute('class')).toBe('new-button-class');
        expect(button.getAttribute('data-custom')).toBe('custom-value');
        expect(button.innerHTML).toBe('New Button Text');
    });
});
```

## E2E Test

The E2E test verifies that the `ButtonInjection` component correctly injects content into buttons across the application.

```typescript
import { buttonInjectionContent } from '../../src/contentToInject';

describe('Button Injector', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    buttonInjectionContent.forEach((button) => {
        it(`should have the correct attributes and text for the button with \${button.selector.attribute}="\${button.selector.value}"`, () => {
            const buttonSelector = \`button[\${button.selector.attribute}="\${button.selector.value}"]\`;

            // Check that the button exists
            cy.get(buttonSelector).should('exist');

            // Check the button text
            cy.get(buttonSelector).should('have.text', button.content.translation);

            // Check the button attributes
            if (button.newAttributes) {
                Object.entries(button.newAttributes).forEach(([key, value]) => {
                    cy.get(buttonSelector).should('have.attr', key, value);
                });
            }
        });
    });
});
```

By maintaining a comprehensive suite of tests, we can ensure the reliability and correctness of the `ButtonInjection` component.
