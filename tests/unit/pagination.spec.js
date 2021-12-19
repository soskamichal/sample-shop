import { createLocalVue, mount } from '@vue/test-utils'
import Pagination from '@/components/Pagination.vue'
import { MdButton } from 'vue-material/dist/components'

const localVue = createLocalVue()
localVue.use(MdButton)

describe('Pagination.vue', () => {
  it('shows 2 buttons when there are only 2', () => {
    const wrapper = mount(Pagination, {
      localVue,
      propsData: {
        currentStep: 1,
        maxSteps: 2
      }
    })
    expect(wrapper.findAllComponents('.md-raised').length).toBe(2)
  })
})
