<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Basket/">Basket</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #nav{
 
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  background-color:bisque;
}
</style>