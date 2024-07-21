import { describe, it, expect } from 'vitest';
import {
    getUniqueSelectorAttributes,
    findElementsByAttribute,
    findInjection,
    injector,
    stripHtmlAndNormalize,
} from '../../utils';
import type { ITextInjection } from '../../types';
import { defineComponent } from 'vue';

// Mock data for testing
const mockInjections: ITextInjection[] = [
    {
        injectionType: 'text',
        selector: { attribute: 'data-pf-type', value: 'Paragraph3' },
        content: { original: 'Original Text', translation: 'Translated Text' },
    },
    {
        injectionType: 'text',
        selector: { attribute: 'data-pf-type', value: 'Heading2' },
        content: { original: 'Original Heading', translation: 'Translated Heading' },
    },
    {
        injectionType: 'text',
        selector: { attribute: 'data-pf-type', value: 'Paragraph3' },
        content: {
            original: 'Another Original Text',
            translation: 'Another Translated Text',
        },
    },
];

const MockComponent = defineComponent({
    props: { text: { type: String, required: true } },
    template: '<div>{{ text }}</div>',
});

describe('injections utility functions', () => {
    it('getUniqueSelectorAttributes should return unique selector attributes', () => {
        const result = getUniqueSelectorAttributes(mockInjections);

        expect(result).toEqual(['data-pf-type']);
    });

    it('findElementsByAttribute should return elements with the specified attribute', () => {
        document.body.innerHTML = `<div data-pf-type="Paragraph3">Original Text</div>
      <div data-pf-type="Heading2">Original Heading</div>
      <div data-pf-type="Paragraph3">Another Original Text</div>
    `;

        const result = findElementsByAttribute('data-pf-type');
        expect(result.length).toBe(3);
        expect(result[0].getAttribute('data-pf-type')).toBe('Paragraph3');
        expect(result[1].getAttribute('data-pf-type')).toBe('Heading2');
        expect(result[2].getAttribute('data-pf-type')).toBe('Paragraph3');
    });

    it('findInjection should return the correct matching injection', () => {
        const el = document.createElement('div');
        el.setAttribute('data-pf-type', 'Paragraph3');
        el.innerHTML = 'Original Text';

        const result = findInjection(el, 'data-pf-type', mockInjections);
        expect(result).toEqual(mockInjections[0]);

        el.innerHTML = 'Non-matching Text';
        const secondResult = findInjection(el, 'data-pf-type', mockInjections);
        expect(secondResult).toBeUndefined();
    });

    it('injector should replace the provided element', () => {
        document.body.innerHTML = `<h1 id="importantElement">Original Content</h1>`;
        const el = document.getElementById('importantElement') as HTMLElement;

        injector(MockComponent, {
            text: 'Element!',
            el: el,
        });

        const newEl = document.querySelector('div') as HTMLElement;
        expect(newEl).toBeDefined();

        const originalEl = document.getElementById('importantElement') as HTMLElement;
        expect(originalEl).toBeNull();
    });

    it('stripHtmlAndNormalize should strip HTML tags and normalize whitespace', () => {
        const input = '   <div>  Hello   <strong>World</strong>!  </div>   ';
        const expectedOutput = 'Hello World!';
        const result = stripHtmlAndNormalize(input);
        expect(result).toBe(expectedOutput);
    });

    it('stripHtmlAndNormalize should handle empty strings', () => {
        const input = '';
        const expectedOutput = '';
        const result = stripHtmlAndNormalize(input);
        expect(result).toBe(expectedOutput);
    });

    it('stripHtmlAndNormalize should handle strings with only whitespace', () => {
        const input = '     ';
        const expectedOutput = '';
        const result = stripHtmlAndNormalize(input);
        expect(result).toBe(expectedOutput);
    });

    it('stripHtmlAndNormalize should handle strings with only HTML tags', () => {
        const input = '<div><strong></strong></div>';
        const expectedOutput = '';
        const result = stripHtmlAndNormalize(input);
        expect(result).toBe(expectedOutput);
    });

    it('stripHtmlAndNormalize should normalize multiple spaces and newlines', () => {
        const input = 'Hello\n\n\nWorld!  This    is a test.';
        const expectedOutput = 'Hello World! This is a test.';
        const result = stripHtmlAndNormalize(input);
        expect(result).toBe(expectedOutput);
    });

    it('stripHtmlAndNormalize should preserve meaningful spaces', () => {
        const input = 'Hello,  World!';
        const expectedOutput = 'Hello, World!';
        const result = stripHtmlAndNormalize(input);
        expect(result).toBe(expectedOutput);
    });
});
