import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import payments from './payments'
import catalog from './catalog'

export default new Vuex.Store({
    modules: {
        payments, 
        catalog,
    }
})