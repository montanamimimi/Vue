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

            <button v-for="item in operators" :key="item" @click="calcHandler(item)">{{ item }}</button>

        </div>

        <input type="checkbox" name="shownums" v-model="showNums">
        <label for="shownums"> Show keyboard</label>

        <div v-if="showNums" class="keyboard">

            <button v-for="item in numbers" :key="item" @click="pasteNum(item)">{{ item }}</button>
            <button @click="clearNum">Clear</button>

            <div>
                <input type="radio" name="editing" value="1" checked v-model="checkedNum">
                <label for="huey">Number 1</label>
                <input type="radio" name="editing" value="2" v-model="checkedNum">
                <label for="huey">Number 2</label>

                <h3 class="error">{{ error.text }}</h3>
            </div>
            
        </div>

        <h1>Result: {{ result}}</h1>
    </div>
</template>

<script>

export default {
    name: 'Calc',
    data: () => ({
    op1: 0,
    op2: 0,
    result: '-',
    operators: ['+', '-', '*', '/', 'exp', 'div'],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    showNums: true,
    checkedNum: 1,
    error: { text: '', switch: false},
    }),
    
    methods: {

        pasteNum(num) {

            if (this.checkedNum == 1) {
                this.op1 = this.op1*10+num;
            } else if (this.checkedNum == 2) {
                this.op2 = this.op2*10+num;
            } else {
                this.error.text = "No number checked";             
            }

        },

        clearNum() {
            if (this.checkedNum == 1) {
                this.op1 = Math.floor(this.op1/10);
            } else if (this.checkedNum == 2) {
                this.op2 = Math.floor(this.op2/10);
            } else {
                this.error.text = "No number checked";             
            }
        },

        calcHandler(name) {

            this.error.text = '';
            this.result = '-';            
            
            if (isNaN(this.op1) || isNaN(this.op2)) {
                this.error.text = 'Put only numbers please';
                return;
            }

            switch(name) {
                case '+': 
                    this.addMethod()
                        break;
                case '-': 
                    this.subMethod()
                        break;
                case '*': 
                    this.multMethod()
                        break;
                case '/': 
                    this.divMethod()
                        break;   
                case 'exp': 
                    this.expMethod()
                        break;      
                case 'div': 
                    this.divIntMethod()
                        break;                                                                                                                           
            }

        },
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

            if (this.op2 === 0) {
                this.error.text = 'No divizion on 0';
                return;
            }

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

.error {
    color: red;
}

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

.keyboard {
    justify-content: center;
    * {
        margin: 10px;
    }
}


</style>
