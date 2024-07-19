import { mount } from '@vue/test-utils'
import TextInjector from '../TextInjector.vue'

describe('TextInjector.vue', () => {
  it('Renders provided text', () => {
    const wrapper = mount(TextInjector, { props: { text: 'Test Text' } })

    expect(wrapper.text()).toBe('Test Text')
  })

  it('Renders default text', () => {
    const wrapper = mount(TextInjector)

    expect(wrapper.text()).toBe('Provide a text property')
  })
})
