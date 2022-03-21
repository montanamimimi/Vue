<template>
    <div>   

        <div class="payment-form">
            <div class="field">
                <label for="cat">Categoty</label>
                <input type="text" v-model="category" name="cat">
            </div>
            <div class="field">
                <label for="price">Price</label>
                <input type="text" v-model.number="value" name="price">
            </div>

            <div class="field">
                <label for="date">Date</label>
                <input type="date" name="date" v-model="date">
            </div>
          
        </div>
        <div class="error">
            {{ error }}
        </div>        

        <div class="payment-add-btn">
            <button @click="addOneMore">Add</button>  
        </div>

        
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'PaymentForm',
    props: ['firstValue', 'instantValue', 'instantCategory'],
    data() {
        return {
            category: 'shopping',
            value: 0,  
            date: 0,
            error: '',
        }
    },

    computed: {
        ...mapState('payments', ['payments']),
        ...mapGetters('payments', ['getPaymentsLength']),

        getToday() {
            let today = new Date();
            let d = today.getDate();
            let m = today.getMonth() + 1;
            let y = today.getFullYear();
            if (d < 10) {
                d = `0${d}`;
            }
            if (m < 10) {
                m = `0${m}`;
            }
            return `${y}-${m}-${d}`
        }
    },
    methods: {
        ...mapMutations('payments', ['addPayment', 'setStartPage', 'setCurrentPage']),
      
        addOneMore() {

            // Проверка ввода суммы 

            if (this.value <= 0) {
                this.error = 'Put normal price! More than 0 ';
                return;
            } else if (isNaN(this.value)) {
                this.error = 'Put number in price ';
                return;
            } else {                              
                this.error = '';
            }

            // Определяем какой присвоить id 
            let maxid = 0;

            this.payments.map(function(obj){
                if (obj.id > maxid) maxid = obj.id;
            });            

            const newPaymentItem = {
                id: maxid + 1,
                date: this.date || this.getToday,
                category: this.category,
                value: this.value
            }                
            this.addPayment(newPaymentItem);
            this.setStartPage();
            let listPages = Math.floor((this.getPaymentsLength-1) / 5) + 1;
            this.setCurrentPage(listPages);
        },
    },
    
    watch: {
        '$route' (to){            
            this.value = to.query.value;
            this.category = to.path.split('/')[2];
            if (this.value) {
                this.addOneMore();
            }

        }
    },    
    mounted() {

        // костыли, но без таймаута не работает

        setTimeout(() => {
            if (this.instantValue) {
                this.value = this.instantValue;
                this.category = this.instantCategory;
                this.addOneMore();
            }                        
        }, 100)
        
    }

}
</script>

<style scoped lang="scss">

.payment-form {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    input {
        padding: 5px;
        height: 30px;
    }
    label {
        font-weight: bold;
        padding: 5px;
    }

}

.payment-add-btn {
    display: flex;
    align-items: center;
    button {
        width: 100%;
        padding: 5px 15px;
        background-color: #fff;        
        &:hover {
            background-color: rgb(218, 218, 218);
            cursor: pointer;
        }
    }
}



.field {
    display: flex;
    flex-direction: column;
}

.error {
    color: red;
}
</style>
