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
import {mapGetters} from "vuex";
export default {
    
    computed:{
        ...mapGetters({total: 'total', basket: 'basket'})
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


<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Titillium+Web:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
v

img{
  width: 200px;
  height: 250px;
}

button{
    color: black;
    font-weight: bold;
}

</style>