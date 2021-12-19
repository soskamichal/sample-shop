import { createLocalVue, mount } from '@vue/test-utils'
import EmptyState from '@/views/EmptyState.vue'
import { MdEmptyState, MdIcon } from 'vue-material/dist/components'

const localVue = createLocalVue()
localVue.use(MdEmptyState)
localVue.use(MdIcon)

describe('EmptyState.vue', () => {
  it('tells user to select a category', () => {
    const msg = 'Select a category, or a subcategory'
    const wrapper = mount(EmptyState, { localVue })
    expect(wrapper.html()).toContain(msg)
  })
})
