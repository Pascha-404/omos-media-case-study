import { createApp, type Component } from 'vue';
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
} from './contentToInject';
import type { IAttributes, IInjectorProps, ITextInjection } from './types';

// Function to handle text injections
const handleTextInjections = (injections: ITextInjection[]) => {
    // Get all unique selector attributes
    const selectorAttributes = getUniqueSelectorAttributes(injections);

    // Iterate over each inque selector attribute
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

handleTextInjections(textInjectionContent);
