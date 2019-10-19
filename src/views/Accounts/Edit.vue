<template>

    <form-account :sub_title="sub_title" :banks="banks" :account="account"></form-account>
    
</template>

<script>

import FormAccount from '@/components/FormAccount.vue'

export default {

    name : 'accounts-edit',

    components: {
        FormAccount
    },

    created(){
        this.$store.dispatch('getBanks')
        this.$store.dispatch('getAccount', this.$route.params.id)
    },


    data() {

        return {

            sub_title: 'Editando conta'

        }

    },

    methods: {
        edit(){
            this.$store.dispatch('updateAccount', this.account).then(() => {
                this.$router.push('/contas')
            })
        }
    },


    computed: {

        banks(){
            return this.$store.state.bank.bankList
        },

        account(){
            return this.$store.state.account.accountView
        }

    }
    
}
</script>