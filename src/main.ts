import { createApp } from 'vue';
import TextInjector from './components/TextInjector.vue';
import DateTimeInjector from './components/DateTimeInjector.vue';

import {
    textInjectionContent,
    buttonInjectionContent,
    dateTimeInjectionContent,
} from './contentToInject';
import type { ITextInjection } from './types';

// Function to handle text injections
const handleTextInjections = (injections: ITextInjection[]) => {
    // Get all unique selector attributes
    const selectorAttributes = [
        ...new Set(injections.map((item: ITextInjection) => item.selector.attribute)),
    ];

    // Iterate over each inque selector attribute
    selectorAttributes.forEach((attribute) => {
        // Find elements that have this attribute
        const domElements = document.querySelectorAll(`[${attribute}]`);

        domElements.forEach((el) => {
            // Find the corresponding injection for this element
            const matchingInjection = injections.find(
                (injection) =>
                    el.getAttribute(attribute) === injection.selector.value &&
                    el.innerHTML.trim() === injection.content.original.trim()
            );

            if (matchingInjection) {
                // Create a new Vie instance and mount the TextInjector component
                const app = createApp(TextInjector, {
                    text: matchingInjection.content.translation,
                    el: el,
                });

                const newEl = document.createElement('div');
                el.replaceWith(newEl);
                app.mount(newEl);
            }
        });
    });
};

handleTextInjections(textInjectionContent);
