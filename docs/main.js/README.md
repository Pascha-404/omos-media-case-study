# main.js Documentation

This file contains the main logic to bootstrap the injection of content on the website. It imports various components and utilities, defines handler functions for different types of injections, and executes these handlers to modify the DOM.

## Imports

The following components and utilities are imported:

- **Components**:
  - `TextInjector` from `./components/TextInjector.vue`
  - `DateTimeInjector` from `./components/DateTimeInjector.vue`
  - `DynamicTextInjector` from `./components/DynamicTextInjector.vue`

- **Utilities**:
  - `getUniqueSelectorAttributes`
  - `findElementsByAttribute`
  - `findInjection`
  - `injector`
  - From `./utils/injections`

- **Content to Inject**:
  - `textInjectionContent`
  - `buttonInjectionContent`
  - `dateTimeInjectionContent`
  - `availableItemsContent`
  - From `./contentToInject`

- **Types**:
  - `IDynamicTextInjection`
  - `IInjectionBase`
  - `ITextInjection`
  - From `./types`

## Functions

### `handleTextInjections`

Handles the injection of text content into the DOM elements.

```javascript
const handleTextInjections = (injections: ITextInjection[]) => {
    // Get all unique selector attributes
    const selectorAttributes = getUniqueSelectorAttributes(injections);

    // Iterate over each unique selector attribute
    selectorAttributes.forEach((attribute) => {
        // Find elements that have this attribute
        const domElements = findElementsByAttribute(attribute);

        domElements.forEach((el) => {
            if (el instanceof HTMLElement) {
                // Find the corresponding injection for this element
                const matchingInjection = findInjection(el, attribute, injections);

                if (matchingInjection) {
                    // Inject component
                    injector(TextInjector, {
                        text: matchingInjection.content.translation,
                        el: el,
                    });
                }
            }
        });
    });
};
```

### `handleButtonInjections`

Handles the injection of button content and updates attributes.

```javascript
const handleButtonInjections = (injections: ITextInjection[]) => {
    // Get all unique selector attributes
    const selectorAttributes = getUniqueSelectorAttributes(injections);

    // Iterate over each unique selector attribute
    selectorAttributes.forEach((attribute) => {
        // Find elements that have this attribute
        const domElements = findElementsByAttribute(attribute);

        domElements.forEach((el) => {
            if (el instanceof HTMLElement) {
                // Find the corresponding injection for this element
                const matchingInjection = findInjection(el, attribute, injections);

                if (matchingInjection) {
                    // Inject component
                    injector(TextInjector, {
                        text: matchingInjection.content.translation,
                        el: el,
                        newAttributes: matchingInjection.newAttributes,
                    });
                }
            }
        });
    });
};
```

### `handleDateTimeInjection`

Handles the injection of the current date and time into a specific element.

```javascript
const handleDateTimeInjection = (injection: IInjectionBase) => {
    const domElement = document.querySelector(`#${injection.selector.value}`);

    if (domElement instanceof HTMLElement) {
        injector(DateTimeInjector, {
            el: domElement,
        });
    }
};
```

### `handleQuantityInjection`

Handles the injection of dynamic text based on the quantity input field.

```javascript
const handleQuantityInjection = (injection: IDynamicTextInjection) => {
    const domElement = document.querySelector(`#${injection.selector.value}`);

    if (domElement instanceof HTMLElement) {
        injector(DynamicTextInjector, {
            el: domElement,
            text: injection.content.translation,
            linkedInput: {
                selector: injection.linkedInput.selector,
                value: injection.linkedInput.value,
            },
        });
    }
};
```

## Fix for Website Bug

Sets the maximum count attribute of the quantity input field to 5.

```javascript
document.querySelector('input[data-pf-type="QuantityField"]')?.setAttribute('max', '5');
```

## Execution

Executes the handler functions to inject content into the website.

```javascript
handleTextInjections(textInjectionContent);
handleButtonInjections(buttonInjectionContent);
handleDateTimeInjection(dateTimeInjectionContent);
handleQuantityInjection(availableItemsContent);
```

## Summary

This `main.js` file is responsible for injecting various types of content into the website's DOM. It uses utility functions to find and inject the appropriate components into the target elements, ensuring that the content is dynamically updated based on the specified logic.

```javascript
import TextInjector from './components/TextInjector.vue';
import DateTimeInjector from './components/DateTimeInjector.vue';

import {
    getUniqueSelectorAttributes,
    findElementsByAttribute,
    findInjection,
    injector,
} from './utils/injections';

import {
    textInjectionContent,
    buttonInjectionContent,
    dateTimeInjectionContent,
    availableItemsContent,
} from './contentToInject';
import type { IDynamicTextInjection, IInjectionBase, ITextInjection } from './types';
import DynamicTextInjector from './components/DynamicTextInjector.vue';

// Function to handle text injections
const handleTextInjections = (injections: ITextInjection[]) => {
    // Get all unique selector attributes
    const selectorAttributes = getUniqueSelectorAttributes(injections);

    // Iterate over each unique selector attribute
    selectorAttributes.forEach((attribute) => {
        // Find elements that have this attribute
        const domElements = findElementsByAttribute(attribute);

        domElements.forEach((el) => {
            if (el instanceof HTMLElement) {
                // Find the corresponding injection for this element
                const matchingInjection = findInjection(el, attribute, injections);

                if (matchingInjection) {
                    // Inject component
                    injector(TextInjector, {
                        text: matchingInjection.content.translation,
                        el: el,
                    });
                }
            }
        });
    });
};

const handleButtonInjections = (injections: ITextInjection[]) => {
    // Get all unique selector attributes
    const selectorAttributes = getUniqueSelectorAttributes(injections);

    // Iterate over each unique selector attribute
    selectorAttributes.forEach((attribute) => {
        // Find elements that have this attribute
        const domElements = findElementsByAttribute(attribute);

        domElements.forEach((el) => {
            if (el instanceof HTMLElement) {
                // Find the corresponding injection for this element
                const matchingInjection = findInjection(el, attribute, injections);

                if (matchingInjection) {
                    // Inject component
                    injector(TextInjector, {
                        text: matchingInjection.content.translation,
                        el: el,
                        newAttributes: matchingInjection.newAttributes,
                    });
                }
            }
        });
    });
};

const handleDateTimeInjection = (injection: IInjectionBase) => {
    const domElement = document.querySelector(`#${injection.selector.value}`);

    if (domElement instanceof HTMLElement) {
        injector(DateTimeInjector, {
            el: domElement,
        });
    }
};

const handleQuantityInjection = (injection: IDynamicTextInjection) => {
    const domElement = document.querySelector(`#${injection.selector.value}`);

    if (domElement instanceof HTMLElement) {
        injector(DynamicTextInjector, {
            el: domElement,
            text: injection.content.translation,
            linkedInput: {
                selector: injection.linkedInput.selector,
                value: injection.linkedInput.value,
            },
        });
    }
};

// Fix website bug with wrong max count
document.querySelector('input[data-pf-type="QuantityField"]')?.setAttribute('max', '5');

handleTextInjections(textInjectionContent);
handleButtonInjections(buttonInjectionContent);
handleDateTimeInjection(dateTimeInjectionContent);
handleQuantityInjection(availableItemsContent);
```
