<template>
  <div class="home">
    
    <Transition name="slide">
    <h1 v-if="slide">Welcome to the poster shop!</h1>
    </Transition>
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
  data(){return{
    slide: false
  }},
  mounted(){
    
      this.slide = true
    
  },
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
.slide-enter-active{
   animation: slide-in 1s ease
}
.slide-leave-active{
  animation: slide-in 1s reverse
}
@keyframes slide-in{
  0% {
    transform: translateX(400px);
    opacity: 0;
  }
  50%{
    transform: translateX(-40px);
    opacity: 50%;
  }
  100%{
    transform: translateX(0px);
    opacity: 100%;
  }
}


</style>