<template>
  <div class="div">
       <img :src="require('../assets/char-'+poster.id+'.png')" alt="poster image" width="300px">
      <p>{{poster.motif}}</p>
      <p>Price: {{poster.price}} kr</p>
      
      
  </div>
</template>

<script>
export default {
    computed:{
        poster(){
            return this.$store.state.posters.find(poster => poster.id == this.$route.params.id)
        }
    }
}
</script>

<style>

</style>