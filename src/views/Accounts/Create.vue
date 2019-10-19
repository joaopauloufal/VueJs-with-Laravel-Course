<template>

    <form-account :sub_title="sub_title" :banks="this.banks" :account="this.account"></form-account>
    
</template>

<script>

import FormAccount from '@/components/FormAccount.vue'

export default {

    name : 'accounts-create',

    components: {
        FormAccount
    },

    created(){
        this.$store.dispatch('getBanks')
    },

    data() {

        return {

            sub_title: 'Criando conta',
            account: {
                balance: 0
            }

        }

    },

    methods: {

        save(){
            this.$store.dispatch('newAccount', this.account).then(() => {
                this.$router.push('/contas')
            })
        }

    },

    computed: {

        banks(){
            return this.$store.state.bank.bankList
        }

    }
    
}
</script>