<template>
  <div>
    <!-- PC -->
    <div class="container-pc">
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
    <!-- mobile -->
    <div class="container-mobile">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Sample shop</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Sample shop menu</span>
      </md-toolbar>

      <md-list :md-expand-single="expandSingle">
        <md-list-item md-expand v-for="category in categories" :key=category.uid>
          <span class="md-list-item-text">{{ category.name }}</span>
          <md-list slot="md-expand">
            <md-list-item @click="selectCategory(category)">
              All {{category.name}}
            </md-list-item>
            <md-list-item v-for="subcategory in category.children" :key=subcategory.uid @click="selectCategory(subcategory)">
              {{ subcategory.name }}
            </md-list-item>
          </md-list>
        </md-list-item>
      </md-list>
    </md-drawer>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      categories: [],
      showNavigation: false,
      windowWidth: 0
    }
  },
  async created () {
    await this.fetchCategories()
    this.categories = this.$store.state.categories
  },
  methods: {
    ...mapActions(['fetchCategories', 'setCurrentCategory']),
    selectCategory (category) {
      this.showNavigation = false
      this.setCurrentCategory(category.uid)
      this.$router.push({ path: `/category/${category.name}`, query: { page: 1 } })
    }
  }
}
</script>

<style scoped>
.container-pc {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  z-index: 10; /*ew*/
}
.dropdown:hover .dropdown-content {
  display: block;
}
.container-mobile {
  display: none
}

@media only screen and (max-width: 1024px) {
  .container-pc {
    display: none
  }
  .container-mobile {
    display: block;
  }
}
</style>
