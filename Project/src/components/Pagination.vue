<template>
    <div>

        <div class="pages">            
            <div class="page" v-for="page in pagesArray" :key="page" @click="goToPage(page)">{{ page }} </div>        
        </div>
        <p>Cur page: {{ currentPage }}</p>
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Pagination', 
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },    

    computed: {
        ...mapState('payments', ['currentPage']),
        ...mapGetters('payments', ['getPaymentsLength']),

        // считаем сколько страниц спрятать, а сколько отобразить. 

        pagesArray: function() {
            let listPages = Math.floor((this.getPaymentsLength-1) / 5) + 1;
            let ourArray = [];
            for (let i = 1; i <= listPages; i++) {
                ourArray.push(i);                
            }
            return ourArray;
        },
    },
    methods: {
        ...mapMutations('payments', ['setCurrentPage']),

        goToPage(newPage) {
            this.setCurrentPage(newPage);
        }
    },
}

</script>

<style scoped lang="scss">

.pages {
    display: flex;
    justify-content: right;   
    margin:15px;
}

.page {
    padding: 10px;
    border: 1px solid rgb(223, 223, 223);
    border-radius: 3px;
    &:hover {
       background-color: rgb(255, 234, 234);
       cursor: pointer;
    }
}

.page-last {
    padding: 10px;
}

</style>
