<template>
  <div id="app">

    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/shopping">Shopping</router-link>
      <div class="fast-add">
        <div class="fast-add-item" @click="addFood">Food for $200</div>
        <div class="fast-add-item" @click="addTransport">Transport for $50 </div>
        <div class="fast-add-item" @click="addEntertaiment">Entertament for $2000</div>
      </div>


    </header>
    <router-view />


  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    addFood() {
      this.$router.push({
        name: 'PaymentFood',
        query: {
          value: 200,          
        }
      }).catch(error => {
          if (
            error.name !== 'NavigationDuplicated' &&
            !error.message.includes('Avoided redundant navigation to current location')
          ) {
            console.log(error)
          }
        })
    },
    addTransport() {
      this.$router.push({
        name: 'PaymentTransport',
        query: {
          value: 50,          
        }
      }).catch(error => {
          if (
            error.name !== 'NavigationDuplicated' &&
            !error.message.includes('Avoided redundant navigation to current location')
          ) {
            console.log(error)
          }
        })
    },
    addEntertaiment() {
      this.$router.push({
        name: 'PaymentEntertaiment',
        query: {
          value: 2000,          
        }
      }).catch(error => {
          if (
            error.name !== 'NavigationDuplicated' &&
            !error.message.includes('Avoided redundant navigation to current location')
          ) {
            console.log(error)
          }
        })
    },        
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

a {
  padding: 10px;
  text-decoration: none;
}

.fast-add {
  display:flex;  
  justify-content: center;
}

.fast-add-item {
  background-color: rgb(221, 221, 221);
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  &:hover {
    background-color: rgb(255, 226, 226);
  }
}
</style>
