import { shallowMount, createLocalVue } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Shopping from '@/components/Shopping.vue'
import PaymentForm from '@/components/PaymentForm.vue'
import Vuex from 'vuex'

describe('Shopping.vue', () => {

  test('Simple Text', () => {

    const wrapper = shallowMount(Shopping)
    
    expect(wrapper.text()).toEqual('Your payment list   Add new payment')
  })

  test('With props', () => {

    const wrapper = shallowMount(Shopping, {
      propsData: {
        forTest: 'Test'
      }
    })
    
    expect(wrapper.text()).toContain('Your payment list Test')
  })
})


describe('PaymentForm.vue', () => {
  it ('Find inputs', () => {
    const wrapper = mount(PaymentForm)

    const inputPrice = wrapper.find('input[name=price]')
    inputPrice.setValue('300')

    expect(wrapper.vm.value).toBe(300)
  })

  it ('Check number in form', () => {
    const wrapper = mount(PaymentForm)

    const inputPrice = wrapper.find('input[name=price]')
    inputPrice.setValue('abc')

    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')
    expect(wrapper.vm.error).toBe('Put number in price')
  })
})


const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
  addPayment: jest.fn()
}

const store = new Vuex.Store({
  mutations
})

describe('asdasd', () => {

  it('Final test', async () => {
    const wrapper = mount(PaymentForm, {
      store, localVue
    })
    
    const inputPrice = wrapper.find('input[name=price]')
    inputPrice.setValue(30)

    const btn = wrapper.find('button[name="+"]')
    btn.trigger('click')

    expect(mutations.addPayment).toHaveBeenCalled()
  })

})
