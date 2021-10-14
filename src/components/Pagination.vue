<template>
    <div>

        <v-pagination class="mb-8 mt-4"
            v-model="page"
            :length="pages"
        >            
        </v-pagination>

    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Pagination', 
    data() {
        return {
            page: 0,
            pages: 0,
        }
    },
    watch: {
        page: function() {
            this.goToPage(this.page);
        },
        getPaymentsLength: function() {
            this.pages = this.totalPages;
            this.page = this.totalPages;                    
        }
    },    
    computed: {
        ...mapState('payments', ['currentPage']),
        ...mapGetters('payments', ['getPaymentsLength']),

        // Количество страниц

        totalPages: function() {
            return Math.floor((this.getPaymentsLength-1) / 5) + 1
        },

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
