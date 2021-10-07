const state = {
    payments: [],
    currentPageArray: [],
    currentPage: 1,
}


const getters = {
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

    deletePayment(state, id) {
        state.payments = state.payments.filter((item) => {
            return item.id !== id;
        }); 
    },

    editPage(state, item){        
        let editing = state.payments.findIndex( el => el.id == item.id);
        state.payments[editing].category = item.cat;
        state.payments[editing].value = item.val;
        state.payments[editing].date = item.date;        
    },

    setCurrentPage (state, number) {
        state.currentPage = number;
    },

    setStartPage(state) {
        state.currentPageArray = state.payments.slice(-5);
    },

    setCurrentPageArray(state, start) {        
        state.currentPageArray = state.payments.slice(start, start + 5);
    }
}

const actions = {
    getPayments({commit}) {

        fetch('https://raw.githubusercontent.com/montanamimimi/Vue/main/Data/payApi.json')
            .then(response => response.json())
            .then(res => {
                let arrayLength = res.length;
                let listPages = Math.floor((arrayLength-1) / 5) + 1;
                commit('setCurrentPage', listPages);
                commit('setPayments', res);
                commit('setStartPage');
            })
    },

}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}