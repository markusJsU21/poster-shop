<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/Basket/">Basket</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Titillium+Web:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
//font-family: 'PT Mono', monospace;
//font-family: 'Source Sans Pro', sans-serif;
//font-family: 'Titillium Web', sans-serif;
//font-family: 'IBM Plex Sans', sans-serif;
* {
  font-family: "IBM Plex Sans", sans-serif;
  margin: 0px;
  padding: 0px;
}

#nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  list-style-type: none;
  background-color: #41bbff;

  a {
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }

  a:hover {
    background-color: #fcdc6b;
  }

  a {
    text-decoration: none;
  }
}
</style>
