<template>

    <form-account :sub_title="sub_title"></form-account>
    
</template>

<script>

import FormAccount from '@/components/FormAccount.vue'

export default {

    name : 'accounts-edit',

    components: {
        FormAccount
    },

    data() {

        return {

            sub_title: 'Editando conta'

        }

    }
    
}
</script>