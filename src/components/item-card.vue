<template>
  <main class="item-card">
      <img :src="require('../assets/char-'+poster.id+'.png')" alt="poster image" height="100px">
      <p>{{poster.motif}}</p>
      
  </main>
</template>

<script>

export default {
  props:['poster']
}
</script>

<style lang= 'scss'>
img{
  width: 200px;
  height: 250px;
}

p{
  color:red;
  font-size: 20px;
  text-align: center;
  
}
</style>