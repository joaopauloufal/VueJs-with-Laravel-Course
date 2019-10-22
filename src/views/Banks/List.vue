<template>
    <div class="row">
        <div class="content-header">
            <h1>Contas bancárias <small>Gerenciamento de bancos</small></h1>
            <div class="grey-text">
            <small>
                <a href="#/">iFinance</a> >
                <span>Seus bancos</span>
            </small>
            </div>
        </div>

        <div class="card col s12">
            <div class="card-content">
                <table class="highlight">
                    <thead>
                    <tr>
                        <th>Bancos</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(bank, $index)  in banks.data">
                        <td class="valign-wrapper">
                           {{ $index + 1 }} - {{ bank.title }} ({{ bank.code }})
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination :totalPerPage="this.totalPerPage" :resource="this.resource"></pagination>
            </div>
        </div>
    </div>
</template>

<script>

import Pagination from '@/components/Pagination.vue'

export default {

    name: 'banks',

    components: {

        Pagination

    },

    data(){
       return {
           totalPerPage : 10,
           resource: 'banks'
       }
    },

    computed: {

        banks(){
            return this.$store.state.pagination.getList
        }

    },

    
}
</script>