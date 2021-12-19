<template>
  <div>
    <product-list :products="products"/>
    <pagination :currentPage="currentPage" :maxPage="maxPage" @changeCurrentPage="changeCurrentPage"/>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue'
import ProductList from '../components/ProductList.vue'
import { mapActions } from 'vuex'

export default {
  name: 'ProductView',
  components: {
    ProductList,
    Pagination
  },
  data () {
    return {
      currentPage: 1,
      maxPage: 1,
      products: [],
      category: ''
    }
  },
  async created () {
    await this.updateProducts()
  },
  methods: {
    ...mapActions(['fetchProducts']),
    changeCurrentPage (page) {
      this.$router.push({ path: this.$route.params.category, query: { page: page } })
      this.currentPage = page
    },
    async updateProducts () {
      await this.fetchProducts(this.$route.query.page, this.$route.params.category)
      // const productList = this.$store.state.products
      this.products = this.$store.state.products.data.products.items
      this.currentPage = this.$store.state.products.data.products.page_info.current_page
      this.maxPage = this.$store.state.products.data.products.page_info.total_pages
    }
  },
  watch: {
    $route (to, from) {
      this.updateProducts()
    }
  }
}
</script>
