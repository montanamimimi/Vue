const state = {
    catalog: [
        {
            id: 1,
            name: 'Test category name',
        },

    ]       
}

const getters = {
    getCategoryNames: state => {
        return state.catalog.map(el => el.name)
    }
}

const mutations = {
    setCatalog (state, catalog) {
        state.catalog = catalog;
    }
}

const actions = {
    getCatalog({commit}, param) {
        console.log(param.id)

        fetch('https://raw.githubusercontent.com/montanamimimi/Vue/lesson4/Data/category.json')
            .then(response => response.json())
            .then(res => {
                commit('setCatalog', res)
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