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
        <p> <strong>Total:</strong> {{total}}</p>
  </main>
</template>

<script>
export default {
    
    computed:{
        basket(){
            return this.$store.state.basket
        },
        total(){
            let totalamount = 0
            for(let item of this.$store.state.basket){
                totalamount += (item.price * item.amount)
            }
            return totalamount
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