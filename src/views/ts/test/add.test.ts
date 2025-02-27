import { describe, expect, test,it,vi } from 'vitest'
// describe测试套件 test==it expect vi主要是用于提供一些函数功能
import { mount } from '@vue/test-utils'
// mount挂载组件
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { createRouter, createWebHistory } from 'vue-router'
import { createVuetify } from 'vuetify' // ✅ 导入 Vuetify
// import 'vuetify/styles' // ✅ 导入 Vuetify 样式
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import '@mdi/font/css/materialdesignicons.css'
// ✅ 创建 Vuetify 实例
const vuetify = createVuetify()

import HelloWorld from './HelloWorld.vue'
import FormPage from "./FormPage.vue"
import {add} from "./add.js"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } }, 
    { path: '/success', component: { template: '<div>Success Page</div>' } }
  ]
})
test('add(1, 2) should return 3', () => {
    // toBe toEqual  toContain
    expect(add(1, 2)).toBe(3);
    const mockFn = vi.fn().mockReturnValue(42);
  expect(mockFn()).toBe(42);
  expect(mockFn).toHaveBeenCalled();
  });

  // test('HelloWorld',async () => {
  //   const wrapper = mount(HelloWorld, { props: { msg: 'Vitest Test' } })
  //   expect(wrapper.text()).toContain('Vitest Test')
  //   const button = wrapper.find('button')
    
  //   await button.trigger('click')
  //   expect(button.text()).toContain('Count: 1')
    
  //   await button.trigger('click')
  //   expect(button.text()).toContain('Count: 2')
  // });


  // test('should handle user interactions and submit the form', async () => {
  //   const wrapper = mount(FormPage, {
  //     global: {
  //       plugins: [vuetify,router], // 挂载路由
  //       // components: { VTextField: true, VBtn: true,VRadio:true,VRadioGroup:true,VContainer:true,FormPage:true }
  //     }
  //   })
  //   // ✅ 确保 v-text-field 存在
  //   const input = wrapper.findComponent({ name: 'VRadio' })
  //   expect(input.exists()).toBe(true)
  
  //   // let input =wrapper.find('[data-testid=""]')
  //   // console.log(input)
  //   // await input.setValue('test query')

  //   // // 触发查询
  //   // const searchButton = wrapper.find('button') // 查询按钮
  //   // await searchButton.trigger('click')

  //   // // 确保 API 请求被调用
  //   // expect(axios.get).toHaveBeenCalledWith('/api/search', { params: { q: 'test query' } })

  //   // // 等待查询数据加载
  //   // await wrapper.vm.$nextTick()

  //   // // 选择选项
  //   // const radio = wrapper.find('input[type="radio"][value="1"]')
  //   // await radio.setValue()

  //   // // 触发提交
  //   // const submitButton = wrapper.findAll('button')[1] // 提交按钮
  //   // await submitButton.trigger('click')

  //   // // 确保提交 API 被调用
  //   // expect(axios.post).toHaveBeenCalledWith('/api/submit', { selected: 1 })

  //   // // 等待跳转
  //   // await wrapper.vm.$nextTick()

  //   // // 确保路由跳转到了成功页面
  //   // expect(wrapper.vm.$router.currentRoute.value.path).toBe('/success')
  // })
  test('advance timers example', () => {
    vi.useFakeTimers();
  
    const callback = vi.fn();
    setTimeout(callback, 1000);
  
    // 快进时间
    vi.advanceTimersByTime(1000);
  
    expect(callback).toHaveBeenCalled();
  
    // 恢复真实计时器
    vi.useRealTimers();
  });

  


