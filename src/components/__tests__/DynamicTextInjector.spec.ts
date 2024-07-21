import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import DynamicTextInjector from '../DynamicTextInjector.vue';

describe('DynamicTextInjector', () => {
    let mockInput: HTMLInputElement;

    beforeEach(() => {
        document.body.innerHTML = `
      <input class="sc-bnOPBZ bwJNhh pf-43_" min="1" max="50" type="number" 
             data-hidespinner="false" name="quantity" data-variants-continue="" 
             data-pf-type="QuantityField" value="1">
    `;
        mockInput = document.querySelector(
            'input[data-pf-type="QuantityField"]'
        ) as HTMLInputElement;
    });

    it('renders the initial text correctly', () => {
        const wrapper = mount(DynamicTextInjector, {
            props: {
                initialText:
                    'Please select between 1 and 5 products: Current total {count} more items',
                dynamicPlaceholder: '{count}',
                maxCount: 5,
                linkedInputSelector: 'data-pf-type',
                linkedInputSelectorValue: 'QuantityField',
            },
        });

        expect(wrapper.text()).toContain('Current total 4 more items');
    });

    it('updates the text when input value changes', async () => {
        const wrapper = mount(DynamicTextInjector, {
            props: {
                initialText:
                    'Please select between 1 and 5 products: Current total {count} more items',
                dynamicPlaceholder: '{count}',
                maxCount: 5,
                linkedInputSelector: 'data-pf-type',
                linkedInputSelectorValue: 'QuantityField',
            },
        });

        // Simulate changing the input value
        mockInput.value = '2';
        mockInput.dispatchEvent(new Event('input'));

        // Wait for Vue to update the DOM
        await wrapper.vm.$nextTick();

        expect(wrapper.text()).toContain('Current total 3 more items');
    });
});
