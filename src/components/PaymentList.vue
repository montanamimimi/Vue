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
                <div class="payment-edit">Edit</div>
            </div>
            <div class="payment-item" v-for="item in currentPageArray" :key="item.id">
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
                <div class="payment-edit" @click="showModal(item)">
                    ...
                </div>
            </div>
            <Pagination />
            
        </div>
        
    </div>
</template>

<script>

import Pagination from './Pagination.vue';
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
    name: 'PaymentList',
    data() {
        return {
            option: false,
        }
    },
    components: {
        Pagination, 
    },    
    computed: {
        ...mapState('payments', ['currentPageArray']),
    },
    methods: {
        ...mapActions('payments', ['getPayments']),   
        ...mapMutations('payments', ['setCurrentPage', 'setStartPage']),
        showModal(item) {
            let title = "payment №" + item.id;
            this.$modal.show(title, {id: 2, item: item.id, cat: item.category, price: item.value, date: item.date});            
        },

    },    
    mounted() {
        this.getPayments();
    }
}
</script>

<style scoped lang="scss">
    
        .payment-list {
            width: 750px;
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
            width: 200px;
            padding: 5px;
        }

        .payment-desc {
            width: 400px;
            padding: 5px;
        }

        .payment-summ, .payment-edit {
            width: 100px;
            padding: 5px;
        }

        .payment-edit {
            cursor: pointer;
            position: relative;
        }



</style>