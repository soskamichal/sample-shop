import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    selectedCategory: '',
    products: {}
  },
  mutations: {
    setCategories (state, categories) {
      state.categories = categories
    },
    setProducts (state, products) {
      state.products = products
    },
    setCurrentCategory (state, category) {
      state.selectedCategory = category
    }
  },
  actions: {
    setCurrentCategory ({ commit }, category) {
      commit('setCurrentCategory', category)
    },
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
    },
    async fetchProducts ({ state, commit }, page) {
      await fetch('https://venia.magento.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query{
              products(filter: {category_uid: {eq: "${state.selectedCategory}"}}, pageSize: 20, currentPage: ${page}){
                items {
                  image {
                    label
                    url
                  }
                  name
                  uid
                }
                page_info {
                  current_page
                  page_size
                  total_pages
                }
                total_count
              }
            }
          `
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          commit('setProducts', data)
        })
    }
  },
  getters: {
  }
})
