<template>
  <div class="div">
       <img :src="require('../assets/char-'+poster.id+'.png')" alt="poster image" height="300px">
      <p>{{poster.motif}}</p>
      <p>Price: {{poster.price}} kr</p>
      <button @click="addToBasket(poster)">Add to basket</button>
      
  </div>
</template>

<script>
export default {
    methods:{
        addToBasket(poster){
            this.$store.dispatch('addToBasket', poster)
        }
    },
    computed:{
        poster(){
            return this.$store.state.posters.find(poster => poster.id == this.$route.params.id)
        }
    }
}
</script>

<style>
/**/
</style>