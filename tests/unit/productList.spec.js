import { createLocalVue, mount } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'
import { MdCard } from 'vue-material/dist/components'

const localVue = createLocalVue()
localVue.use(MdCard)

describe('Pagination.vue', () => {
  it('contains the passed product', () => {
    const wrapper = mount(ProductList, {
      localVue,
      propsData: {
        products: [
          {
            name: 'test dress',
            image: {
              url: '',
              label: ''
            }
          }
        ]
      }
    })
    expect(wrapper.html()).toContain('test dress')
  })
  it('displays alt text', () => {
    const wrapper = mount(ProductList, {
      localVue,
      propsData: {
        products: [
          {
            name: 'test dress',
            image: {
              url: '',
              label: 'alt text'
            }
          }
        ]
      }
    })
    expect(wrapper.html()).toContain('alt text')
  })
})
