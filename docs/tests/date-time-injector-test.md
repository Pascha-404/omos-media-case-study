# DateTimeInjector Tests

This document provides an overview of the unit and end-to-end (E2E) tests for the `DateTimeInjector` component. The `DateTimeInjector` component displays and constantly updates the current date and time.

## Unit Tests

Unit tests are written using Vue Test Utils and Vitest. They verify the functionality of the `DateTimeInjector` component in isolation.

### Test File

**Location**: `src/components/__tests__/DateTimeInjector.spec.ts`

### Test Description

#### Test: Renders date and time in the correct format

- **Description**: This test checks if the `DateTimeInjector` component renders the date and time in the correct format.
- **Test Code**:

```typescript
import { mount } from '@vue/test-utils';
import DateTimeInjector from '../DateTimeInjector.vue';

describe('DateTimeInjector.vue', () => {
    it('Renders date and time in the correct format', () => {
        const mockDate = new Date(2024, 0, 1);

        vi.setSystemTime(mockDate);

        const wrapper = mount(DateTimeInjector);

        expect(wrapper.text()).toBe('01.01.2024, 00:00:00');

        vi.useRealTimers();
    });
});
```

## E2E Tests

E2E tests are written using Cypress. They verify the functionality of the `DateTimeInjector` component in a real browser environment by simulating user interactions.

### Test File

**Location**: `cypress/e2e/dateTimeInjection_spec.cy.ts`

### Test Description

#### Test: Injects the current date and time into the element

- **Description**: This test checks if the `DateTimeInjector` component correctly injects the current date and time into the element.
- **Test Code**:

```typescript
describe('DateTime Injection', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should inject the current date and time into the element', () => {
        const dateTimeRegex = /^\d{2}\.\d{2}\.\d{4}, \d{2}:\d{2}:\d{2}$/;

        // Check that the element exists
        cy.get('#current-date-time-updated').should('exist');

        // Check that the element contains a valid date and time
        cy.get('#current-date-time-updated')
            .invoke('text')
            .should((text) => {
                expect(text).to.match(dateTimeRegex);
            });
    });
});
```

By maintaining a comprehensive suite of tests, we can ensure the reliability and correctness of the `DateTimeInjector` component.
