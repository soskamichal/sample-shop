<template>
  <div>
    <div class="container">
      <div v-for="category in categories" :key=category.uid>
        <div class="dropdown">
          <md-button @click="selectCategory(category)">{{ category.name }}</md-button>
          <div class="dropdown-content" v-if="(category.children.length > 0)">
            <div v-for="subcategory in category.children" :key=subcategory.uid >
              <md-button @click="selectCategory(subcategory)">{{ subcategory.name }}</md-button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      this.$router.push(`/category/${category.name}/1`)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 2; /*ew*/
}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
