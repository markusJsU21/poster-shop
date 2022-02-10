<template>
  <div class="home">
    
    <h1>Welcome to Your Vue.js App</h1>

    <router-link :to="'/SingleItem/' + poster.id" v-for="poster of posters" :key="poster.id"><ItemCard :poster="poster"/></router-link>
  </div>
</template>

<script>
import ItemCard from '../components/item-card.vue'
export default {
  components: {ItemCard},
  computed: {
    posters(){
      return this.$store.state.posters
    }
  }
}
</script>