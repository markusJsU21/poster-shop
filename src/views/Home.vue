<template>
  <div class="home">
    
    <h1>Welcome to the poster shop!</h1>
    <br>
    <div class="item-container">
    <router-link :to="'/SingleItem/' + poster.id" v-for="poster of posters" :key="poster.id"><ItemCard :poster="poster"/></router-link>
    </div>
    <button @click="back" v-if="this.$store.state.currentPage > 0">back</button>
    <button @click="forward" v-if="this.$store.state.currentPage < this.$store.state.posters.length -3">forward</button>
  </div>
</template>

<script>
import ItemCard from '../components/item-card.vue'
import {mapGetters} from 'vuex'
export default {
  components: {ItemCard},
  methods:{
    forward(){
      this.$store.dispatch('forward')
    },
    back(){
      this.$store.dispatch('back')
    }
  },
  computed: {
    ...mapGetters({posters: 'threeCardView'}),
    // posters(){
    //   return this.$store.state.posters
    // }
  }
}
</script>

<style lang= 'scss'>

.item-container{
  /*
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  */

  display:flex;
  justify-content: space-evenly;
  align-items: center;
  
}

h1{
  text-align: center;
  padding: 20px;
  font-size: 30px;
}

button{
  width: 90px;
  height: 50%;
  
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

</style>