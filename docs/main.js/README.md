# Main.js

This file is the entry point for handling various injections in the application. It imports necessary components, utility functions, and content to inject into the DOM.

## Imported Components

-   `TextInjector` - Component for injecting text.
-   `DateTimeInjector` - Component for injecting date and time.
-   `ButtonInjecton` - Component for injecting button attributes and text.
-   `DynamicTextInjector` - Component for injecting dynamic text linked with input fields.

## Imported Utilities

-   `getUniqueSelectorAttributes` - Retrieves unique selector attributes from injections.
-   `findElementsByAttribute` - Finds DOM elements by attribute.
-   `findInjection` - Finds a matching injection for a DOM element.
-   `injector` - Utility to inject a Vue component into a DOM element.
-   `buttonInjector` - Utility to inject a button Vue component into a DOM element.

## Imported Content

-   `textInjectionContent` - Content for text injections.
-   `buttonInjectionContent` - Content for button injections.
-   `dateTimeInjectionContent` - Content for date and time injections.
-   `availableItemsContent` - Content for dynamic text injections linked with input fields.

## Functions

### `handleTextInjections`

Handles injecting text into DOM elements based on provided text injections.

#### Parameters

-   `injections: ITextInjection[]` - List of text injections.

#### Process

1. Retrieves unique selector attributes from the injections.
2. Finds DOM elements matching each selector attribute.
3. For each DOM element, finds the matching injection and injects the `TextInjector` component with the appropriate text.

```javascript
const handleTextInjections = (injections: ITextInjection[]) => {
    const selectorAttributes = getUniqueSelectorAttributes(injections);
    selectorAttributes.forEach((attribute) => {
        const domElements = findElementsByAttribute(attribute);
        domElements.forEach((el) => {
            if (el instanceof HTMLElement) {
                const matchingInjection = findInjection(el, attribute, injections);
                if (matchingInjection) {
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

---

### `handleButtonInjections`

Handles injecting button components into the DOM.

#### Parameters

-   `injections: ITextInjection[]` - List of button injections.

#### Process

1. Iterates over each injection.
2. Uses `buttonInjector` to inject the `ButtonInjecton` component with the appropriate text and attributes.

```javascript
const handleButtonInjections = (injections: ITextInjection[]): void => {
    injections.forEach((injection) => {
        buttonInjector(ButtonInjecton, {
            text: injection.content.translation,
            newAttributes: injection.newAttributes,
            selector: injection.selector,
        });
    });
};
```

---

### `handleDateTimeInjection`

Handles injecting the date and time component into a DOM element.

#### Parameters

-   `injection: IInjectionBase` - Date and time injection object.

#### Process

1. Finds the DOM element by ID from the injection's selector value.
2. Uses `injector` to inject the `DateTimeInjector` component into the found element.

```javascript
const handleDateTimeInjection = (injection: IInjectionBase) => {
    const domElement = document.querySelector(\`#\${injection.selector.value}\`);
    if (domElement instanceof HTMLElement) {
        injector(DateTimeInjector, {
            el: domElement,
        });
    }
};
```

---

### `handleQuantityInjection`

Handles injecting dynamic text linked with input fields into a DOM element.

#### Parameters

-   `injection: IDynamicTextInjection` - Dynamic text injection object.

#### Process

1. Finds the DOM element by ID from the injection's selector value.
2. Uses `injector` to inject the `DynamicTextInjector` component into the found element with linked input properties.

```javascript
const handleQuantityInjection = (injection: IDynamicTextInjection) => {
    const domElement = document.querySelector(\`#\${injection.selector.value}\`);
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

---

## Bug Fix

Fixes a website bug by setting the max count attribute for quantity input fields.

```javascript
document.querySelector('input[data-pf-type="QuantityField"]')?.setAttribute('max', '5');
```

## Invocation

Calls the functions to handle various injections.

```javascript
handleTextInjections(textInjectionContent);
handleButtonInjections(buttonInjectionContent);
handleDateTimeInjection(dateTimeInjectionContent);
handleQuantityInjection(availableItemsContent);
```
