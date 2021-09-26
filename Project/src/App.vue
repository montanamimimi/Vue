<template>
  <div id="app">
    <Cats></Cats>
    <Calc v-if="0" />
    <Shopping/>

  </div>
</template>

<script>

import Calc from './components/Calc.vue';
import Shopping from './components/Shopping.vue';
import Cats from './components/Cats.vue';

export default {
  name: 'App',
  components: {
    Calc, Shopping, Cats
  }
}
</script>

<style lang="scss">

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;

        }
        
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
