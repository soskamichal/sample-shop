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
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      categories: []
    }
  },
  async created () {
    await this.fetchCategories()
    this.categories = this.$store.state.categories
  },
  methods: {
    ...mapActions(['fetchCategories', 'setCurrentCategory']),
    selectCategory (category) {
      this.setCurrentCategory(category.uid)
      this.$router.push({ path: `/category/${category.name}`, query: { page: 1 } })
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
