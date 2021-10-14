<template>
    <div>   

        <v-container>
            <v-row>
                <v-col :cols="4">
                    <v-text-field
                        label="Category"
                        :rules="rules"
                        v-model="category" 
                        name="cat"
                    >                        
                    </v-text-field>
                </v-col>
                <v-col :cols="4">
                    <v-text-field
                        label="Price"
                        :rules="rules"
                        v-model.number="value" 
                        name="price"
                    >                        
                    </v-text-field>                    
                </v-col>
                <v-col :cols="4">
                    <v-text-field
                        label="Date"
                        name="date" 
                        v-model="date"
                    >                        
                    </v-text-field>                    
                </v-col>                                
            </v-row>
        </v-container>


        <div class="error">
            {{ error }}
        </div>        

        <div class="payment-add-btn">
            <v-btn @click="addOneMore" name="+">Add</v-btn>  
        </div>

        
    </div>
</template>

<script>

import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'PaymentForm',    
    props: ['editFlag', 'editCat', 'editPrice', 'editdate', 'editId'],
    data() {
        return {
            rules: [
                value => !!value || 'Required',
            ],
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
        ...mapMutations('payments', ['addPayment', 'setStartPage', 'setCurrentPage', 'editPage']),
      
        addOneMore() {                        
            // Проверка ввода суммы 

            if (this.value <= 0) {
                this.error = 'Put normal price! More than 0 ';
                return;
            } else if (isNaN(this.value)) {
                this.error = 'Put number in price';
                return;
            } else {                              
                this.error = '';
            }

            if (this.editFlag) {
                let item = {
                    id: this.editId, 
                    cat: this.category, 
                    val: this.value, 
                    date: this.date || this.getToday,
                }
                this.editPage(item);  
                this.$modal.hide();                          
            } else {

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
                this.$modal.hide();               
            }

        },
    },
    mounted() {
        this.date = this.getToday;
        console.log(this.date);

        if (this.editFlag) {
            this.category = this.editCat;
            this.value = this.editPrice;
            this.date = this.editDate;
        }
    }

}
</script>

