import { mount } from '@vue/test-utils';
import TextInjector from '../TextInjector.vue';

describe('TextInjector.vue', () => {
    it('Creates a new element with the same attributes and updated text', () => {
        // Create a mock element
        const mockElement = document.createElement('h3');
        mockElement.setAttribute('class', 'insert-sick-styling-here');
        mockElement.setAttribute('data-test', 'test-me');
        mockElement.innerHTML = "I'm a heading!";

        // Mount the component with the mock element and translated text
        const wrapper = mount(TextInjector, {
            props: { text: 'Test Text', el: mockElement },
        });

        const renderedElement = wrapper.find('h3');
        expect(renderedElement.exists()).toBe(true);
        expect(renderedElement.text()).toBe('Test Text');
        expect(renderedElement.attributes('class')).toBe('insert-sick-styling-here');
        expect(renderedElement.attributes('data-test')).toBe('test-me');
    });

    it("Updates and add's attributes", () => {
        // Create a mock element
        const mockElement = document.createElement('button');
        mockElement.setAttribute('data-soldout', 'Sold Out');
        mockElement.setAttribute('data-adding', 'Adding...');
        mockElement.setAttribute('data-added', 'Thank you!');
        mockElement.setAttribute('type', 'button');
        mockElement.setAttribute('name', 'add');
        mockElement.innerHTML = 'Add to Cart';

        // Mount the component with the mock element and changed attributes
        const wrapper = mount(TextInjector, {
            props: {
                text: 'In den Warenkorb',
                el: mockElement,
                newAttributes: {
                    'data-soldout': 'Ausverkauft',
                    'data-adding': 'Füge hinzu...',
                    'data-added': 'Dankeschön!',
                },
            },
        });

        const renderedElement = wrapper.find('button');
        expect(renderedElement.exists()).toBe(true);
        expect(renderedElement.text()).toBe('In den Warenkorb');
        expect(renderedElement.attributes('data-soldout')).toBe('Ausverkauft');
        expect(renderedElement.attributes('data-adding')).toBe('Füge hinzu...');
        expect(renderedElement.attributes('data-added')).toBe('Dankeschön!');
        expect(renderedElement.attributes('type')).toBe('button');
        expect(renderedElement.attributes('name')).toBe('add');
    });
});
