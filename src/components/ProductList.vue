<template>
  <div class="container">
    <md-card v-for="(product, key) in products" :key=key>
        <md-card-media>
          <img :src=product.image.url :alt=product.image.label>
        </md-card-media>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ product.name }}</div>
        </md-card-header-text>
      </md-card-header>

    </md-card>
  </div>
</template>

<script>
export default {
  props: ['products']
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1 1 0px;
  }
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  img {
    width: 100%;
    height: auto;
  }
</style>
