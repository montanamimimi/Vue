<template>
    <div>
        <div class="container">
            <PaymentForm 
            :instantValue="value"
            :instantCategory="category"
            />
            <PaymentList/>
        </div>
    </div>
</template>

<script>
import PaymentList from './PaymentList.vue';
import PaymentForm from './PaymentForm.vue';

export default {
    name: 'instantPayment',
    components: {
        PaymentList, PaymentForm,
    },
    data(){
        return {
            category: 'instant',
            value: 0,                
        }
    },
    mounted(){                
        this.value = this.$route.query.value;
        this.category = this.$route.path.split('/')[2];   
        console.log(this.value); 
    }
}

</script>

<style scoped>
.container {
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;    
}
</style>