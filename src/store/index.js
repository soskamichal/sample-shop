import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    setCategories (state, categories) {
      state.categories = categories
    }
  },
  actions: {
    async fetchCategories ({ commit }) {
      await fetch('https://venia.magento.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query{
              categoryList{
                children {
                  uid,
                  name,
                  children {
                    uid,
                    name
                  }
                }
              }
            }
          `
        })
      })
        .then(response => response.json())
        .then(data => commit('setCategories', data.data.categoryList[0].children))
    }
  },
  getters: {
  }
})
