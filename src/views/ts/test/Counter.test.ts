import { mount } from '@vue/test-utils'
import { describe, it, expect,test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Counter from './Counter.vue'
import TodoApp from './TodoApp.vue'
import Nav from "./Nav.vue"
const vuetify = createVuetify({
    components,
    directives,
})



describe.skip('Counter.vue', () => {

    // 1. **基础渲染测试**
    it('renders correctly', () => {
        const wrapper = mount(Counter)
        expect(wrapper.text()).toContain('Count: 0')
    })

    // 2. **Props 测试**
    it('accepts a start prop and initializes count', () => {
        const wrapper = mount(Counter, {
            props: { start: 5 }
        })
        expect(wrapper.text()).toContain('Count: 5')
    })

    // 3. **事件测试**
    it('increments the count when "+" is clicked', async () => {
        const wrapper = mount(Counter)
        await wrapper.find('button:nth-of-type(1)').trigger('click')
        expect(wrapper.text()).toContain('Count: 1')
    })

    it('decrements the count when "-" is clicked', async () => {
        const wrapper = mount(Counter)
        await wrapper.find('button:nth-of-type(2)').trigger('click')
        expect(wrapper.text()).toContain('Count: -1')
    })

    // 4. **状态和交互**
    it('applies the "active" class when count > 0', async () => {
        const wrapper = mount(Counter)
        await wrapper.find('button:nth-of-type(1)').trigger('click') // +1
        expect(wrapper.find('h1').classes()).toContain('active')
    })

    // 5. **插槽测试**
    it('renders slot content', () => {
        const wrapper = mount(Counter, {
            slots: { footer: '<p>Footer content</p>' }
        })
        expect(wrapper.html()).toContain('<p>Footer content</p>')
    })

    // 6. **边界情况**
    it('handles large numbers correctly', async () => {
        const wrapper = mount(Counter, {
            props: { start: 100000 }
        })
        await wrapper.find('button:nth-of-type(1)').trigger('click')
        console.log(wrapper.text())
        expect(wrapper.text()).toContain('Count: 100001')
    })

   
})

it('vuetify', async () => {
    const wrapper = mount(Counter, {
        props: {},
        global: {
            plugins: [vuetify],
        }
    }
    )
    const button = wrapper.findComponent({ name: 'v-btn' })  
    expect(button.exists()).toBe(true)
    await button.trigger('click')
    expect(wrapper.text()).toContain('Count: 1')
})

// 要测试的组件
const MessageComponent = {
    template: '<p>{{ msg }}</p>',
    props: ['msg']
  }
  
  test('displays message', () => {
    const wrapper = mount(MessageComponent, {
      props: {
        msg: 'Hello world'
      }
    })
  
    // 断言组件渲染出的文本
    expect(wrapper.text()).toContain('Hello world')
  })


  test('creates a todo', async() => {
    const wrapper = mount(Nav)

    // 这里我们隐式断言 #profile 元素存在。
    const profileLink = wrapper.get('#profile')
  
    expect(profileLink.text()).toEqual('My Profile')
  })