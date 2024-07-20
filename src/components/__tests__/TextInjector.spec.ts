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
        expect(renderedElement.attributes('data-test')).toBe('test-me')
    });
});
