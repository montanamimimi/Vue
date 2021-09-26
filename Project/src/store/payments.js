const state = {
    payments: [],    
    currentPage: 1,
}


const getters = {
    getPageArray: state => {        
        let newArray = state.payments.slice(-5)
        return newArray
    },

    getPaymentsLength: state => {
        return state.payments.length
    },
}

const mutations = {
    setPayments (state, payments) {
        state.payments = payments;
    },

    addPayment (state, item){    
        state.payments.push(item);
    },

    setCurrentPage (state, number) {
        state.currentPage = number;
    },
}

const actions = {
    getPayments({commit}) {

        fetch('https://raw.githubusercontent.com/montanamimimi/Vue/lesson4/Data/payments.json')
            .then(response => response.json())
            .then(res => {
                let arrayLength = res.length;
                let listPages = Math.floor((arrayLength-1) / 5) + 1;
                commit('setCurrentPage', listPages);
                commit('setPayments', res);
            })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}