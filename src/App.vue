<template>

  <v-app>
    <v-app-bar app flat>      
        <v-btn plain :ripple="false" to="/">Home</v-btn>
        <v-btn plain :ripple="false" to="/shopping">Shopping</v-btn>      
    </v-app-bar>

  <v-main>
    <router-view />
  </v-main>

     <transition name="fade"> 
            <Modal 
            v-if="modalWindow"
            :modalWindow="modalWindow"
            :modalWindowSettings="modalWindowSettings"
            />    
      </transition>
      
    <v-footer>&copy; 2021 mimimi</v-footer>
 

  </v-app>
  
</template>

<script>

import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
      Modal
  },  
  data() {
    return {
      modalWindow: '',
      modalWindowSettings: {},
    }
  },
  methods: {
    onShown(settings) {    
      this.modalWindow = settings.name;
      this.modalWindowSettings = settings;
    },
    onHide() {
      this.modalWindow ='';
      this.modalWindowSettings = {}
    },
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

  },
  mounted() {
    this.$modal.EventBus.$on('show', this.onShown);
    this.$modal.EventBus.$on('hide', this.onHide);
  }
}
</script>

