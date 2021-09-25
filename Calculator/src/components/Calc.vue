<template>
    <div>
        <p class="test">Calculator online</p>
        <div class="numbers">
            <label for="number1">Number1</label>
            <input type="text" v-model.number="op1" name="number1">
            <label for="number2">Number2</label>
            <input type="text" v-model.number="op2" name="number2">
        </div>

        <div class="operations">
            <button @click="addMethod">+</button>
            <button @click="subMethod">-</button>
            <button @click="multMethod">*</button>
            <button @click="divMethod">/</button>
            <button @click="expMethod">Exp</button>
            <button @click="divIntMethod">Div</button>
        </div>

        <h1>{{ result}}</h1>
    </div>
</template>

<script>

export default {
    name: 'Test',
    data: () => ({
    op1: 0,
    op2: 0,
    result: 0
    }),
    methods: {
        addMethod() {
            this.result = this.op1 + this.op2;
        },
        subMethod() {
            this.result = this.op1 - this.op2;
        },
        multMethod() {
            this.result = this.op1 * this.op2;
        },
        divMethod() {
            this.result = this.op1 / this.op2;
        },
        expMethod() {
            this.result = Math.pow(this.op1, this.op2);
        },
        divIntMethod() {
            this.result = Math.floor(this.op1 / this.op2);
        }                                        
    }
}
</script>

<style scoped lang="scss">

.test {
    color: red;
}

.numbers {
    display: flex;
    justify-content: center;
        * {
        margin: 10px;
    }
}

.operations {
    display: flex;
    justify-content: center;    

    * {
        margin: 10px;
        font-size: 30px;
    }
}


</style>
