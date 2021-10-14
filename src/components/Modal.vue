<template>
    <div>
        <v-toolbar dark color="primary">
            <v-btn icon dark @click="hideMe">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>
                {{ modalWindowSettings.name }}     
            </v-toolbar-title>     
        </v-toolbar>
                
        <v-card-text>                                                                     
            <PaymentForm 
                v-if="modalWindowSettings.id == 1" 
                :editPrice="editingItemPrice"
                :editCat="editingItemCat"
                :editDate="editingItemDate"
                :editFlag="editFlag"
                :editId="editId"
            />

            <v-list v-if="modalWindowSettings.id == 2">                            
                <v-list-item @click="editItem(modalWindowSettings)">
                    <v-list-item-icon>
                        <v-icon>mdi-silverware-fork-knife</v-icon>
                    </v-list-item-icon>
                    Edit
                </v-list-item>
                <v-list-item @click="deleteItem(modalWindowSettings.item)">
                    <v-list-item-icon>
                        <v-icon>mdi-delete</v-icon>
                    </v-list-item-icon>
                    Delete
                </v-list-item>                                    
            </v-list>
        </v-card-text>                                                     
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
    },

}

</script>

