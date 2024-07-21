import { createApp, type Component } from "vue";
import type { ITextInjection, IInjectorProps } from "@/types";

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

// Search for a matching injection that has the matching attribute and original content
const findInjection = (
    el: HTMLElement,
    attribute: string,
    injectionsArray: ITextInjection[]
): ITextInjection | undefined => {
    return injectionsArray.find(
        (injection) =>
            el.getAttribute(attribute) === injection.selector.value &&
            el.innerHTML.trim() === injection.content.original.trim()
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

export {getUniqueSelectorAttributes, findElementsByAttribute, findInjection, injector}