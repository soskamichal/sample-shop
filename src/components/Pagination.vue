<template>
  <div class="container">
    <div v-for="(page, key) in numbersDisplay" :key=key>
      <md-button
        class="md-raised"
        :class="{ 'md-primary': (currentPage === page) }"
        @click="changePage(page)">{{ page }}</md-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxPage: 10,
      currentPage: 2
    }
  },
  computed: {
    numbersDisplay: function () {
      const numbers = [this.currentPage]
      if (this.currentPage === 1) {
        numbers.push(this.currentPage + 1)
        if (this.maxPage > 2) {
          numbers.push(this.currentPage + 2)
        }
        return numbers
      }
      if (this.currentPage === this.maxPage) {
        numbers.unshift(this.currentPage - 1)
        if (this.maxPage > 2) {
          numbers.unshift(this.currentPage - 2)
        }
        return numbers
      }
      return [this.currentPage - 1, this.currentPage, this.currentPage + 1]
    }
  },
  methods: {
    changePage: function (page) {
      this.currentPage = page
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
</style>
