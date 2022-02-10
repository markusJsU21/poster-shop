<template>
  <main class="item-card">
      <img :src="'../assets/char-'+ poster.id + '.png'" alt="poster image" width="50px" height="50px">
      <p>{{poster.motif}}</p>
  </main>
</template>

<script>
export default {
  props: ['poster']
}
</script>

<style>

</style>