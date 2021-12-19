import { createLocalVue, mount } from '@vue/test-utils'
import CategorySelection from '@/components/CategorySelection.vue'
import { MdButton, MdToolbar, MdDrawer, MdIcon, MdList } from 'vue-material/dist/components'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
const localStore = new Vuex.Store({
  actions: {
    fetchCategories () {
    },
    setCurrentCategory () {
    }
  }
})
localVue.use(MdButton)
localVue.use(MdToolbar)
localVue.use(MdDrawer)
localVue.use(MdIcon)
localVue.use(MdList)

describe('CategorySelection.vue', () => {
  it('dispalys categories', () => {
    const wrapper = mount(CategorySelection, {
      localVue,
      store: localStore,
      data () {
        return {
          showNavigation: true,
          categories: [
            {
              uid: 'Mjg=',
              name: 'Bottoms',
              children: [
                {
                  uid: 'MzE=',
                  name: 'Pants & Shorts'
                },
                {
                  uid: 'MzQ=',
                  name: 'Skirts'
                }
              ]
            }
          ]
        }
      }
    })
    expect(wrapper.html()).toContain('Bottoms')
  })
})
