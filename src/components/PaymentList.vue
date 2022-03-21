<template>
    <div>
        <v-simple-table>
            <template v-slot:default>
                <thead no-gutters>
                    <tr>
                        <th>
                            №
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Summ
                        </th>
                        <th>
                            Edit
                        </th>
                    </tr>
 
                </thead>
                <tbody>
                    <tr v-for="item in currentPageArray" :key="item.id">
                        <td>
                            {{ item.id }}
                        </td>
                        <td>
                            {{ item.date }}
                        </td>
                        <td>
                            {{ item.category }}
                        </td>
                        <td>
                            ${{ item.value }}
                        </td>
                        <td @click="showModal(item)" style="cursor:pointer">
                            ...
                        </td>
                    </tr>
                </tbody>


            </template>            
        </v-simple-table>
        <Pagination />
    </div>
</template>

<script>

import Pagination from './Pagination.vue';
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
    name: 'PaymentList',
    data() {
        return {
            option: false,
        }
    },
    components: {
        Pagination, 
    },    
    computed: {
        ...mapState('payments', ['currentPageArray']),
    },
    methods: {
        ...mapActions('payments', ['getPayments']),   
        ...mapMutations('payments', ['setCurrentPage', 'setStartPage']),
        showModal(item) {
            let title = "payment №" + item.id;
            this.$modal.show(title, {id: 2, item: item.id, cat: item.category, price: item.value, date: item.date});            
        },

    },    
    mounted() {
        this.getPayments();
    }
}
</script>

