<template>
    <div>
        <div class="container">
            <div class="text-h5 text-sm-h3 mb-8 mt-4">Your payment list {{ forTest }}</div>

            <PaymentList  />   
            

            <v-btn  @click="addForm">Add new payment</v-btn>          
            <PaymentForm 
                v-if="addNew.show" 
                @addNewPayment="addNewPayment"  
            />
        </div>
    </div>



</template>

<script>
import PaymentList from './PaymentList.vue';
import PaymentForm from './PaymentForm.vue';
import { mapMutations } from 'vuex'

export default {
    name: 'Shopping',
    props: ['forTest'],
    components: {
        PaymentList, PaymentForm,
    },
    data() {
        return {        
            addNew: {show: false, text: 'Add new payment'},
            error: { text: '', switch: false},            
        }
    },
    methods: {
        ...mapMutations('payments', ['setCurrentPage', 'deletePayment']),

        addForm() {
            this.$modal.show('Adding payment', {id: 1})
        },

        addNewPayment(newData) {
            this.resData = [...this.resData, newData]
        },

        addInstantPayment() {
            this.addNew.show = true;
        }
    }
}
</script>

<style scoped lang="scss">

.error {
    color: red;
}

.container {
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;    
}

.add-button {
    width: 300px;
    background-color: #fff;
    padding: 10px;
    &:hover {
        background-color: rgb(218, 218, 218);
        cursor: pointer;
    }
}
</style>
