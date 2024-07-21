# Injections Utility Functions

This module provides utility functions for injecting Vue components into the DOM based on certain criteria. These functions help in selecting elements, normalizing content, and injecting components into the targeted elements.

## Functions

### getUniqueSelectorAttributes

Gets all unique selector attributes from an array of injections.

```typescript
import type { ITextInjection } from '@/types';

const getUniqueSelectorAttributes = (injections: ITextInjection[]): string[] => {
    return [
        ...new Set(injections.map((item: ITextInjection) => item.selector.attribute)),
    ];
};
```

### findElementsByAttribute

Finds all elements in the DOM that have a specific attribute.

```typescript
const findElementsByAttribute = (attribute: string): HTMLElement[] => {
    return Array.from(document.querySelectorAll(`[${attribute}]`));
};
```

### stripHtmlAndNormalize

Strips HTML tags from a string and normalizes whitespace, including removing line breaks.

```typescript
const stripHtmlAndNormalize = (html: string): string => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const textContent = tmp.textContent || tmp.innerText || '';
    return textContent.replace(/\s+/g, ' ').trim();
};
```

### findInjection

Searches for a matching injection that has the matching attribute and original content.

```typescript
import type { ITextInjection } from '@/types';

const findInjection = (
    el: HTMLElement,
    attribute: string,
    injectionsArray: ITextInjection[]
): ITextInjection | undefined => {
    return injectionsArray.find(
        (injection) =>
            el.getAttribute(attribute) === injection.selector.value &&
            stripHtmlAndNormalize(el.innerHTML) ===
                stripHtmlAndNormalize(injection.content.original)
    );
};
```

### injector

Creates a Vue component and injects it into the targeted element with the defined props.

```typescript
import { createApp, type Component } from 'vue';
import type { IInjectorProps } from '@/types';

const injector = (component: Component, props: IInjectorProps): void => {
    if (props.el instanceof HTMLElement) {
        const app = createApp(component, { ...props });

        const newEl = document.createElement('div');
        props.el.replaceWith(newEl);
        app.mount(newEl);
    } else {
        console.error('Provided element is not an HTMLElement');
    }
};
```

## Exports

The following functions are exported from this module:

```typescript
export {
    getUniqueSelectorAttributes,
    findElementsByAttribute,
    findInjection,
    injector,
    stripHtmlAndNormalize,
};
```

These functions can be imported and used in other parts of the application to facilitate the injection of Vue components into the DOM.
