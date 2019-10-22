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
                    <tr v-for="bank in banks.data">
                        <td class="valign-wrapper">
                            {{ bank.title }} ({{ bank.code }})
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    name: 'banks',

    computed: {

        banks(){
            return this.$store.state.bank.bankList
        }

    },

    created(){

        this.$store.dispatch('getBanks')

    }

    
}
</script>