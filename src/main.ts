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

const handleButtonInjections = (injections: ITextInjection[]) => {
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
