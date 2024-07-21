# TextInjector Tests

This document provides an overview of the unit and end-to-end (E2E) tests for the `TextInjector` component. The `TextInjector` component is responsible for injecting text and attributes into an existing HTML element.

## Unit Tests

Unit tests are written using Vue Test Utils and Jest. They verify the functionality of the `TextInjector` component in isolation.

### Test File

**Location**: `src/components/__tests__/TextInjector.spec.ts`

### Test Description

#### Test 1: Creates a new element with the same attributes and updated text

- **Description**: This test checks if the `TextInjector` component creates a new element with the same attributes as the original element and updates the text content.
- **Test Code**:

```typescript
import { mount } from '@vue/test-utils';
import TextInjector from '../TextInjector.vue';

describe('TextInjector.vue', () => {
    it('Creates a new element with the same attributes and updated text', () => {
        // Create a mock element
        const mockElement = document.createElement('h3');
        mockElement.setAttribute('class', 'insert-sick-styling-here');
        mockElement.setAttribute('data-test', 'test-me');
        mockElement.innerHTML = "I'm a heading!";

        // Mount the component with the mock element and translated text
        const wrapper = mount(TextInjector, {
            props: { text: 'Test Text', el: mockElement },
        });

        const renderedElement = wrapper.find('h3');
        expect(renderedElement.exists()).toBe(true);
        expect(renderedElement.text()).toBe('Test Text');
        expect(renderedElement.attributes('class')).toBe('insert-sick-styling-here');
        expect(renderedElement.attributes('data-test')).toBe('test-me');
    });
```

#### Test 2: Updates and adds attributes

- **Description**: This test checks if the `TextInjector` component updates and adds attributes to the existing element.
- **Test Code**:

```typescript
    it("Updates and add's attributes", () => {
        // Create a mock element
        const mockElement = document.createElement('button');
        mockElement.setAttribute('data-soldout', 'Sold Out');
        mockElement.setAttribute('data-adding', 'Adding...');
        mockElement.setAttribute('data-added', 'Thank you!');
        mockElement.setAttribute('type', 'button');
        mockElement.setAttribute('name', 'add');
        mockElement.innerHTML = 'Add to Cart';

        // Mount the component with the mock element and changed attributes
        const wrapper = mount(TextInjector, {
            props: {
                text: 'In den Warenkorb',
                el: mockElement,
                newAttributes: {
                    'data-soldout': 'Ausverkauft',
                    'data-adding': 'Füge hinzu...',
                    'data-added': 'Dankeschön!',
                },
            },
        });

        const renderedElement = wrapper.find('button');
        expect(renderedElement.exists()).toBe(true);
        expect(renderedElement.text()).toBe('In den Warenkorb');
        expect(renderedElement.attributes('data-soldout')).toBe('Ausverkauft');
        expect(renderedElement.attributes('data-adding')).toBe('Füge hinzu...');
        expect(renderedElement.attributes('data-added')).toBe('Dankeschön!');
        expect(renderedElement.attributes('type')).toBe('button');
        expect(renderedElement.attributes('name')).toBe('add');
    });
});
```

## E2E Tests

E2E tests are written using Cypress. They verify the functionality of the `TextInjector` component in a real browser environment by simulating user interactions.

### Test File

**Location**: `cypress/e2e/textInjection_spec.cy.ts`

### Test Description

#### Test 1: Injects translated text into the headings

- **Description**: This test checks if the `TextInjector` component correctly injects the translated text into the headings with the `data-pf-type="Heading2"` attribute.
- **Test Code**:

```typescript
import { textInjectionContent } from '../../src/contentToInject';
import type { ITextInjection } from '../../src/types';

const getTextTranslations = (
    dataArray: ITextInjection[],
    targetValue: string
): string[] => {
    // Filters array of objects for the targetValue
    const filterForValue = dataArray.filter(
        (item: ITextInjection) => item.selector.value === targetValue
    );
    // Creates a new array of strings, only containing the translations
    const createTranslationArray = filterForValue.map((el) => el.content.translation);

    return createTranslationArray;
};

describe('Text Injector', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('injects translated text into the headings', () => {
        const expectedTranslations = getTextTranslations(
            textInjectionContent,
            'Heading2'
        );

        cy.get('h3[data-pf-type="Heading2"]').each(($el, index) => {
            if (index < expectedTranslations.length) {
                cy.wrap($el).should('have.html', expectedTranslations[index]);
            }
        });
    });
```

#### Test 2: Injects translated text into the paragraphs

- **Description**: This test checks if the `TextInjector` component correctly injects the translated text into the paragraphs with the `data-pf-type="Paragraph3"` attribute.
- **Test Code**:

```typescript
    it('injects translated text into the paragraphs', () => {
        const expectedTranslations = getTextTranslations(
            textInjectionContent,
            'Paragraph3'
        );

        cy.get('p[data-pf-type="Paragraph3"').each(($el, index) => {
            if (index < expectedTranslations.length) {
                cy.wrap($el).should('have.html', expectedTranslations[index]);
            }
        });
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

By maintaining a comprehensive suite of tests, we can ensure the reliability and correctness of the `TextInjector` component.