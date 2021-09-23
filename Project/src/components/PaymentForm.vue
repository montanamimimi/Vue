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
            <button @click="addPayment">Add</button>  
        </div>

    </div>
</template>

<script>


export default {
    name: 'PaymentForm',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            category: 'shopping',
            value: 0,  
            date: 0,
            error: '',
        }
    },

    computed: {
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
        addPayment() {

            // Проверка ввода суммы 

            if (this.value <= 0) {
                this.error = 'Put normal price! More than 0 ';
                return;
            } else {
                this.error = '';
            }

            // Определяем какой присвоить id 
            let maxid = 0;

            this.list.map(function(obj){
                if (obj.id > maxid) maxid = obj.id;
            });
            
            const newPayment = {
                id: maxid + 1,
                date: this.date || this.getToday,
                category: this.category,
                value: this.value
            }        

            this.$emit('addNewPayment', newPayment);
        }
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
