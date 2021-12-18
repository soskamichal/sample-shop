<template>
  <div class="home">
    <md-toolbar class="md-dense primary">
      <h3 class="md-title">Sample Shop</h3>
    </md-toolbar>
    <category-selection/>
    <product-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategorySelection from '../components/CategorySelection.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    CategorySelection,
    ProductList
  }
}
</script>
