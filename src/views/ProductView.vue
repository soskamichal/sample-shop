<template>
  <div>
    <product-list/>
    <pagination/>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'ProductView',
  components: {
    ProductList,
    Pagination
  }
}
</script>
