/* eslint-disable no-undef */

import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

it('Using native on should be fine.', (done) => {
  const ButtonComponent = defineComponent({
    setup () {
      return () => (
        <button class='btn'>Click me</button>
      )
    }
  })

  const ButtonWrapper = defineComponent({
    setup () {
      return () => (
        <ButtonComponent />
      )
    }
  })

  const Wrapper = defineComponent({
    setup () {
      const onClick = () => {
        done()
      }
      return () => (
        <ButtonWrapper onClick:native={onClick} />
      )
    }
  })

  const wrapper = mount(Wrapper)
  const button = wrapper.find('button.btn')
  button.trigger('click')
})
