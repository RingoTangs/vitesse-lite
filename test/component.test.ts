import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HelloWorld from '@/components/HelloWorld.vue'

describe('component of HelloWorld.vue', () => {
  it('should render', () => {
    const wrapper = mount(HelloWorld, { props: { initial: 10 } })
    expect(wrapper.text()).toContain('10')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be interactive', async () => {
    const wrapper = mount(HelloWorld, { props: { initial: 0 } })
    expect(wrapper.text()).toContain('0')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('1')
  })
})
