# Injections Utility

This file contains a set of utility functions for handling injections of components and text into the DOM.

## Functions

### `getUniqueSelectorAttributes`

Returns an array of unique selector attributes from a list of text injections.

#### Parameters
- `injections: ITextInjection[]` - The list of text injections.

#### Returns
- `string[]` - An array of unique selector attributes.

```typescript
const getUniqueSelectorAttributes = (injections: ITextInjection[]): string[] => {
    return [
        ...new Set(injections.map((item: ITextInjection) => item.selector.attribute)),
    ];
};
```

---

### `findElementsByAttribute`

Finds and returns all elements that have the specified attribute.

#### Parameters
- `attribute: string` - The attribute to search for.

#### Returns
- `HTMLElement[]` - An array of elements with the specified attribute.

```typescript
const findElementsByAttribute = (attribute: string): HTMLElement[] => {
    return Array.from(document.querySelectorAll(\`[\${attribute}]\`));
};
```

---

### `stripHtmlAndNormalize`

Strips HTML tags from a string and normalizes whitespace, removing any line breaks.

#### Parameters
- `html: string` - The HTML string to be stripped and normalized.

#### Returns
- `string` - The resulting text string.

```typescript
const stripHtmlAndNormalize = (html: string): string => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const textContent = tmp.textContent || tmp.innerText || '';
    return textContent.replace(/\\s+/g, ' ').trim();
};
```

---

### `findInjection`

Searches for a matching injection that has the specified attribute and original content.

#### Parameters
- `el: HTMLElement` - The element to match.
- `attribute: string` - The attribute to match.
- `injectionsArray: ITextInjection[]` - The array of injections to search.

#### Returns
- `ITextInjection | undefined` - The matching injection, or `undefined` if no match is found.

```typescript
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

---

### `injector`

Creates a Vue component and injects it into the targeted element with the specified props.

#### Parameters
- `component: Component` - The Vue component to be injected.
- `props: IInjectorProps` - The props to be passed to the component.

```typescript
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

---

### `buttonInjector`

Creates a Vue component and injects it into the DOM, specifically for buttons, with the specified props.

#### Parameters
- `component: Component` - The Vue component to be injected.
- `props: IButtonInjectorProps` - The props to be passed to the component.

```typescript
const buttonInjector = (component: Component, props: IButtonInjectorProps): void => {
    let vBtnMountpoint = document.querySelector('#v-btn-mountpoint');
    if (!vBtnMountpoint) {
        const newBtnMountpoint = document.createElement('div');
        newBtnMountpoint.setAttribute('id', 'v-btn-mountpoint');
        vBtnMountpoint = newBtnMountpoint;
    }

    const app = createApp(component, { ...props });

    const newEl = document.createElement('div');
    vBtnMountpoint.appendChild(newEl);
    app.mount(newEl);
};
```

## Exported Functions

The following functions are exported from this module:

- `getUniqueSelectorAttributes`
- `findElementsByAttribute`
- `findInjection`
- `injector`
- `stripHtmlAndNormalize`
- `buttonInjector`