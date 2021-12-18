<template>
  <div>
    <md-menu v-for="category in categories" :key=category.uid md-size="medium" md-align-trigger>
      <md-button md-menu-trigger>{{ category.name }}</md-button>
      <md-menu-content v-if="(category.children.length > 0)">
        <md-menu-item v-for="subcategory in category.children" :key=subcategory.uid >
          <md-button @click="selectCategory(subcategory)">{{ subcategory.name }}</md-button>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>

export default {
  data () {
    return {
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
        },
        {
          uid: 'MTk=',
          name: 'Tops',
          children: [
            {
              uid: 'MjI=',
              name: 'Blouses & Shirts'
            },
            {
              uid: 'MjU=',
              name: 'Sweaters'
            }
          ]
        },
        {
          uid: 'Mzc=',
          name: 'Dresses',
          children: []
        },
        {
          uid: 'Nw==',
          name: 'Accessories',
          children: [
            {
              uid: 'MTA=',
              name: 'Belts'
            },
            {
              uid: 'MTM=',
              name: 'Jewelry'
            },
            {
              uid: 'MTY=',
              name: 'Scarves'
            }
          ]
        },
        {
          uid: 'NDA=',
          name: 'Shop The Look',
          children: [
            {
              uid: 'NDM=',
              name: 'Minimalist Sensibility'
            },
            {
              uid: 'NDY=',
              name: 'Outside the Lines'
            },
            {
              uid: 'NDk=',
              name: 'Carefree Days'
            },
            {
              uid: 'NTI=',
              name: 'Perfectly Beachy'
            },
            {
              uid: 'NTU=',
              name: 'Retire your LBD'
            },
            {
              uid: 'NTg=',
              name: 'Timeless Sophistication'
            }
          ]
        }
      ]
    }
  },
  methods: {
    selectCategory (category) {
      console.log('selected category', category)
    }
  }
}
</script>
