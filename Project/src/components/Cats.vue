<template>
    <div>
        <p>{{ list }}</p>
        <button @click="getCat">Get Cat</button>
        <p>{{ catalog }}</p>
        {{ getCategoryNames }}
    </div>
        
</template>

<script>

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
 
export default {
    name: 'Cats',
    data() {
        return {
            list: [],
        }
    },
    computed: {
        ...mapState('catalog', ['catalog']),
        ...mapGetters('catalog', ['getCategoryNames'])
    },
    methods: {
        ...mapMutations('catalog', ['setCatalog']),
        ...mapActions('catalog', ['getCatalog']),

        getCat() {
            setTimeout( () => {
                this.list.push({name: 'Kitty', age: 2});
            }, 2000)
            this.setCatalog([{ id: 0, name: 'setting'}])
            this.getCatalog({ id: 0, name: 'getting'})
        },
    }
}
</script>

<style scoped lang="scss">

</style>