<template>
    <div>
        <transition name="fade">
            <div id="myModal" class="modal">                
                <div class="modal-content">    
                    <div class="adding">
                        <h2>{{ modalWindow  }}</h2>                
                        <span @click="hideMe" class="close">&times;</span>
                    </div>

                    <PaymentForm 
                        v-if="modalWindowSettings.id == 1" 
                        :editPrice="editingItemPrice"
                        :editCat="editingItemCat"
                        :editDate="editingItemDate"
                        :editFlag="editFlag"
                        :editId="editId"
                    />

                    <div v-if="modalWindowSettings.id == 2">
                        <div class="options"> 
                        <ul>
                            <li @click="editItem(modalWindowSettings)">Edit</li>
                            <li @click="deleteItem(modalWindowSettings.item)">Delete</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>            

        </transition>
            
    </div>
</template>

<script>

import PaymentForm from './PaymentForm.vue';
import { mapMutations } from 'vuex';

export default {
    name: 'Modal',
    props: ['modalWindow', 'modalWindowSettings'],        
    components: {
        PaymentForm, 
    },       
    data() {
        return {
            editId: 0,
            editFlag: false,
            editingItemCat: 'lol',
            editingItemPrice: 1000000,
            editingItemDate: '2015-03-25',
        }
    },
    methods: {
        ...mapMutations('payments', ['setCurrentPage', 'setStartPage', 'deletePayment']),
        deleteItem(id) {
            this.deletePayment(id);
            this.setStartPage();
            this.setCurrentPage();
            this.$modal.hide();
        },

        editItem(settings) {
            this.modalWindowSettings.id = 1;
            this.editId = settings.item;
            this.editFlag = true;
            this.editingItemCat = settings.cat;
            this.editingItemPrice = settings.price;
            this.editingItemDate = settings.date;          
        },

        hideMe(){
            this.$modal.hide();
        }
    }
}

</script>


<style lang="scss">

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}

.adding {
    width: 100%;
    display: flex;
    justify-content: space-around;    
}

.modal {
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

    .options {
        background: white;
        padding: 20px;
        ul {
            list-style: none;
            li {
                padding: 10px;
                border-bottom: 1px solid rgb(219, 219, 219);
                cursor: pointer;
            }
        }
    }

</style>