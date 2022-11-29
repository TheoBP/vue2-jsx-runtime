/* eslint-disable no-undef */

import { mount } from '@vue/test-utils'
import Vue, { defineComponent } from 'vue'

it('Mixing usage should work properly.', () => {
  Vue.component('example', Vue.extend({
    render: h => h('div', ['Example'])
  }))

  const Example = Vue.component('example')
  const Wrapper = defineComponent({
    setup () {
      return () => (
        <Example />
      )
    }
  })

  const wrapper = mount(Wrapper)
  expect(wrapper.html()).toBe('<div>Example</div>')
})
