<template>
  <div class="home">
    
    <h1>Welcome to the poster shop!</h1>
    <br>

    <div class="item-container">
     
    <router-link :to="'/SingleItem/' + poster.id" v-for="poster of posters" :key="poster.id"><ItemCard :poster="poster"/> </router-link>

    </div>
     
    
    
   
    <button @click="back" v-if="this.$store.state.currentPage > 0">back</button>
    <button @click="forward" v-if="this.$store.state.currentPage < this.$store.state.posters.length -6">forward</button>
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
  }
}
</script>

<style lang= 'scss'>

.item-container{
 

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
.slide-leave-active{
  animation: bounce-in .5s reverse
}
@keyframes bounce-in{
  0% {
    transform: scale(0);
  }
  50%{
    transform: scale(1.5)
  }
  100%{
    transform: scale(1)
  }
}


</style>