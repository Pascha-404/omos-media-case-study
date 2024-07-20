import { mount } from '@vue/test-utils';
import DateTimeInjector from '../DateTimeInjector.vue';

describe('DateTimeInjector.vue', () => {
    it('Renders date and time in the correct format', () => {
        const mockDate = new Date(2024, 0, 1);

        vi.setSystemTime(mockDate);

        const wrapper = mount(DateTimeInjector);

        expect(wrapper.text()).toBe('01.01.2024, 00:00:00');

        vi.useRealTimers();
    });
});
