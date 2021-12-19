<template>
  <div class="home">
    <md-toolbar class="md-dense primary toolbar">
      <h3 class="md-title">Sample Shop</h3>
    </md-toolbar>
    <category-selection/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import CategorySelection from '../components/CategorySelection.vue'

export default {
  name: 'Home',
  components: {
    CategorySelection
  }
}
</script>

<style scoped>
@media only screen and (max-width: 1024px) {
  .toolbar {
    display: none
  }
}
</style>
