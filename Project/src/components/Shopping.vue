<template>
    <div>

        <div class="container">
            <h1>Your payment list</h1>

            <PaymentList  />   
            

            <button class="add-button" @click="addForm">{{ addNew.text }}</button>          
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
        ...mapMutations('payments', ['setCurrentPage']),

        addForm() {
            this.addNew.show = !this.addNew.show;
            if (this.addNew.show) {
                this.addNew.text = 'Hide payment form'
            } else {
                this.addNew.text = 'Add new payment'
            }
        },

        addNewPayment(newData) {
            this.resData = [...this.resData, newData]
        },

        addInstantPayment() {
            this.addNew.show = true;
        }
    },

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
