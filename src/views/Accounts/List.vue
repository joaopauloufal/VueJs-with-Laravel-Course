<template>
    <div class="row">
    <div class="content-header">
        <h1>Contas bancárias <small>Gerenciamento de contas</small></h1>
        <div class="grey-text">
        <small>
            <a href="#/">iFinance</a> >
            <span>Suas contas</span>
        </small>
        </div>
    </div>

    <div class="card col s12">
        {{accounts}}
        <div class="card-content">
        <table class="highlight">
            <thead>
            <tr>
                <th>contas</th>
            </tr>
            </thead>
            <tbody>
            <tr @click="goTo(1)">
                <td class="valign-wrapper">
                Conte título &nbsp;
                <small>agência: 000 / conta: 0000 / código do banco:000</small>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
        <div class="card-action">
        <a href="/contas/novo">Nova conta</a>
        </div>
    </div>
    </div>
</template>

<script>
export default {

    name: 'accounts',

    created(){

        this.$store.dispatch('getAccounts');

    },

    methods: {

        goTo(id) {
            this.$router.push('/contas/' + id);
        }

    },

    computed: {

        accounts(){

            return this.$store.state.account.accountList

        }

    }
    
}
</script>

<style>

    tbody tr {
        cursor: pointer;
    }

</style>