<template>
    <div>

        <div class="pages">
            <div class="page" v-for="page in pages" :key="page" @click="goToPage(page)">{{ page }} </div>
            <div class="page-last" >{{ lastPage }} </div>
        </div>


    </div>
</template>

<script>

export default {
    name: 'Pagination', 
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },    
    data() {
        return {
            pages: [],
            lastPage: 1,
        }
    },
    methods: {
        countList() {
            let listLength = this.list.length;
            let listPages = Math.floor((listLength-1) / 5);
            this.lastPage = listPages +1;
            for (let i = 1; i <= listPages; i++) {
                this.pages.push(i);
            }
        },
        goToPage(newPage) {
            this.$emit('goToNewPage', newPage);
        }
    },
    beforeMount() {
        this.countList()
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
