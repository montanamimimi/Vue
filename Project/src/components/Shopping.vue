<template>
    <div>

        <div class="container">
            <h1>Your payment list</h1>

            <PaymentList :list="resData" />   
            

            <button class="add-button" @click="addForm">{{ addNew.text }}</button>          
            <PaymentForm :list="resData" v-if="addNew.show" @addNewPayment="addNewPayment"  />
        </div>
    </div>
</template>

<script>
import PaymentList from './PaymentList.vue';
import PaymentForm from './PaymentForm.vue';

export default {
    name: 'Shopping',
    components: {
        PaymentList, PaymentForm, 
    },
    data() {
        return {        
            addNew: {show: false, text: 'Add new payment'},
            error: { text: '', switch: false},
            resData: [
                {
                    id: 1,
                    date: '13.09.2021',
                    category: 'Food',
                    value: 250,
                },
                                {
                    id: 2,
                    date: '14.09.2021',
                    category: 'Sports',
                    value: 300,
                },
                                {
                    id: 3,
                    date: '15.09.2021',
                    category: 'Home',
                    value: 1250,
                },
                {
                    id: 4,
                    date: '13.09.2021',
                    category: 'Food',
                    value: 250,
                },
                {
                    id: 5,
                    date: '14.09.2021',
                    category: 'Sports',
                    value: 300,
                },
                {
                    id: 6,
                    date: '14.09.2021',
                    category: 'Sports',
                    value: 300,
                },                                                                                

            ]                
        }
    },
    
    methods: {
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
