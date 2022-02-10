<template>
<main class="basket">
  <li v-for="poster in basket" :key="poster.id">
    <img :src="require('../assets/char-'+poster.id+'.png')" alt="poster image" height="100px">  
    <strong>motif:</strong> {{poster.motif}}
    
    <strong>price: </strong>{{poster.amount * poster.price}}kr  | 
    <button v-if="poster.amount>0" @click="decreaseAmount(poster)">-</button>
     {{poster.amount}}
    <button @click="increaseAmount(poster)">+</button>
        </li>
  </main>
</template>

<script>
export default {
    
    computed:{
        basket(){
            return this.$store.state.basket
        }
    },

    methods:{
        decreaseAmount(poster){
            this.$store.dispatch('decreaseAmount', poster)
        },
        increaseAmount(poster){
            this.$store.dispatch('increaseAmount', poster)
        }
    }
   
}
</script>

<style>

</style>