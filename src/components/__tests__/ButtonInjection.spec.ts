import { mount } from '@vue/test-utils';
import ButtonInjection from '../ButtonInjecton.vue'

describe('ButtonInjection.vue', () => {
    const selector = { attribute: 'name', value: 'add' };
    const newAttributes = {
        id: 'new-button-id',
        class: 'new-button-class',
        'data-custom': 'custom-value',
    };
    const text = 'New Button Text';

    it('should update attributes and text of the target element', async () => {
        document.body.innerHTML = '<button name="add">Old Button Text</button>';

        mount(ButtonInjection, {
            props: { selector, newAttributes, text },
        });

        const button = document.querySelector('button[name="add"]') as HTMLElement;

        expect(button).not.toBeNull();
        expect(button.getAttribute('id')).toBe('new-button-id');
        expect(button.getAttribute('class')).toBe('new-button-class');
        expect(button.getAttribute('data-custom')).toBe('custom-value');
        expect(button.innerHTML).toBe('New Button Text');
    });
});
