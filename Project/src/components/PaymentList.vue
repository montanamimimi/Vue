<template>
    <div>
        <div class="payment-list">
            <div class="payment-headers">
                <div class="payment-id">
                    №
                </div>
                <div class="payment-date">
                    Date
                </div>
                <div class="payment-desc">
                    Description
                </div>
                <div class="payment-summ">
                    Summ
                </div>
            </div>
            <div class="payment-item" v-for="item in resultList" :key="item.id">
                <div class="payment-id">
                    {{ item.id }}
                </div>
                <div class="payment-date">
                    {{ item.date }}
                </div>
                <div class="payment-desc">
                    {{ item.category }}
                </div>
                <div class="payment-summ">
                    ${{ item.value }}
                </div>
            </div>
            <Pagination :list="list" @goToNewPage="goToNewPage" />
                
        </div>
      
        
    </div>
</template>

<script>

import Pagination from './Pagination.vue';

export default {
    name: 'PaymentList',
    components: {
        Pagination, 
    },    
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            a: [
                {
                    id: 11,
                    date: '14.09.2021',
                    category: 'Sports',
                    value: 300,
                },    
            ],
            resultList: [],
        }
    },
    methods: {
        takeResultList() {
            this.resultList = this.list.slice(-5);
        },
        goToNewPage(page) {
            let listLength = this.list.length;
            let listPages = Math.floor((listLength-1) / 5);

            // на 1 странице записей 
            let inFirstPage = this.list.length - 5*listPages;

            // старт и финиш нового массива 
            let start = 0;
            let finish = 0;
            if (page == 1) {
                start = 0;
                finish = inFirstPage;
            } else {
                start = inFirstPage + 5*(page-2);
                finish = start + 5;
            }            

            this.resultList = this.list.slice(start, finish);

        }
    },    
    mounted() {
        this.takeResultList();
    },
}
</script>

<style scoped lang="scss">
        .payment-list {
            width: 650px;
            margin: 30px;
            border: 1px solid grey;
        }
        .payment-item, .payment-headers {
            display: flex;
            padding: 10px;                       
        }

        .payment-item:hover {
            background-color: rgb(206, 206, 206);
        }

        .payment-id {
            width: 50px;
            padding: 5px;
        }

        .payment-date {
            width: 100px;
            padding: 5px;
        }

        .payment-desc {
            width: 400px;
            padding: 5px;
        }

        .payment-summ {
            width: 100px;
            padding: 5px;
        }
</style>