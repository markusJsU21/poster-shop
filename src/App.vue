<template>
  <div id="app">
    <div id="nav">
      <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeInUp"
       leave-active-class="animate__animated animate__fadeOut"
      >
      <router-link key="home" to="/">Home</router-link>
      </transition>
      <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeInUp"
       leave-active-class="animate__animated animate__fadeOut"
      >
      <router-link key="basket" to="/Basket/">Basket</router-link>
      </transition>
    </div>
    <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    >
    <router-view/>
    </transition>
  </div>
</template>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Titillium+Web:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
//font-family: 'PT Mono', monospace;
//font-family: 'Source Sans Pro', sans-serif;
//font-family: 'Titillium Web', sans-serif;
//font-family: 'IBM Plex Sans', sans-serif;
*{
  font-family: 'IBM Plex Sans', sans-serif;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  
}
  #nav{
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  background-color: #41BBFF;

    a{
      color: white;
      font-size: 2rem;
      font-weight: bold;
    }

    a:hover{
      background-color: #FCDC6B;
    }
}
a{
  text-decoration: none;
}

.animate__animated.animate__fadeIn,
.animate__animated.animate__fadeOut{
  --animate-duration: .1s;
}
</style>