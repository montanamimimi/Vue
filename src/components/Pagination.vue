<template>
    <div>

        <div class="pages">            
            <div class="page" v-for="page in pagesArray" :key="page" @click="goToPage(page)">{{ page }} </div>        
        </div>
        <p>Current page: {{ currentPage }}</p>
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Pagination', 
    computed: {
        ...mapState('payments', ['currentPage']),
        ...mapGetters('payments', ['getPaymentsLength']),

        // создаем массив с номерами страниц. 

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
        ...mapMutations('payments', ['setCurrentPage', 'setCurrentPageArray']),        

        goToPage(newPage) {
            this.setCurrentPage(newPage);
            let startItem = 0;
            if (newPage !== 1 ) {
                startItem = this.getPaymentsLength - (this.pagesArray.length + 1 - newPage)*5;
            }
            
            this.setCurrentPageArray(startItem);            
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
