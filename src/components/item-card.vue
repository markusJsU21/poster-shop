<template>
  <main class="item-card">
      <img :src="require('../assets/char-'+poster.id+'.png')" alt="poster image" width="100px">
      <p>{{poster.motif}}</p>
      
  </main>
</template>

<script>

export default {
  props:['poster']
}
</script>

<style>

</style>