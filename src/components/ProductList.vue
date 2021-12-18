<template>
  <div>
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
  data () {
    return {
      products: [
        {
          image: {
            label: 'Main',
            url: 'https://jnz3dtiuj77ca.dummycachetest.com/media/catalog/product/cache/f3224196651198010fb979ca11483e32/v/t/vt01-kh_main_2.jpg'
          },
          name: 'Penelope Peasant Blouse',
          uid: 'MzMxMw=='
        },
        {
          image: {
            label: 'Main',
            url: 'https://jnz3dtiuj77ca.dummycachetest.com/media/catalog/product/cache/f3224196651198010fb979ca11483e32/v/t/vt02-rn_main_2.jpg'
          },
          name: 'Chloe Silk Shell',
          uid: 'MzMxMA=='
        },
        {
          image: {
            label: 'Main',
            url: 'https://jnz3dtiuj77ca.dummycachetest.com/media/catalog/product/cache/f3224196651198010fb979ca11483e32/v/t/vt03-rn_main_2.jpg'
          },
          name: 'Susanna Draped Tank',
          uid: 'MzMwNw=='
        },
        {
          image: {
            label: 'Main',
            url: 'https://jnz3dtiuj77ca.dummycachetest.com/media/catalog/product/cache/f3224196651198010fb979ca11483e32/v/t/vt04-mt_main_2.jpg'
          },
          name: 'Anna Draped Top',
          uid: 'MzMwNA=='
        },
        {
          image: {
            label: 'Main',
            url: 'https://jnz3dtiuj77ca.dummycachetest.com/media/catalog/product/cache/f3224196651198010fb979ca11483e32/v/t/vt05-pe_main_2.jpg'
          },
          name: 'Cora Open-Back Tank',
          uid: 'MzMwMQ=='
        }
      ]
    }
  }
}
</script>

<style scoped>
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
