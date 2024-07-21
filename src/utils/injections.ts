import { createApp, type Component } from 'vue';
import type { ITextInjection, IInjectorProps } from '@/types';

// Get all unique selector attributes
const getUniqueSelectorAttributes = (injections: ITextInjection[]): string[] => {
    return [
        ...new Set(injections.map((item: ITextInjection) => item.selector.attribute)),
    ];
};

// Find elements by attribute
const findElementsByAttribute = (attribute: string): HTMLElement[] => {
    return Array.from(document.querySelectorAll(`[${attribute}]`));
};

// Utility function to strip HTML tags and normalize whitespace, including removing line breaks
const stripHtmlAndNormalize = (html: string): string => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const textContent = tmp.textContent || tmp.innerText || '';
    return textContent.replace(/\s+/g, ' ').trim();
};

// Search for a matching injection that has the matching attribute and original content
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

// Create the component and inject it into the targeted element with the defined props
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

export {
    getUniqueSelectorAttributes,
    findElementsByAttribute,
    findInjection,
    injector,
    stripHtmlAndNormalize,
};
