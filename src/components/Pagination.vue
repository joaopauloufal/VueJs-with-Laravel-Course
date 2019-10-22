<template>
    <center>
        <ul class="pagination">
            <li class="waves-effect" :class="{active: n == active}" v-for="n in total">
                <a href="" @click.prevent="navigate(n)" >{{ n }}</a>
            </li>
        </ul>
        <p>Exibindo página {{ active }} de {{ total }}, total de {{ totalRegistries }} registros.</p>
    </center>
</template>

<script>
export default {

    name: 'pagination',

    props: ['totalPerPage', 'resourceMethod'],

    created(){
        this.$store.dispatch(this.resourceMethod, {limit: this.totalPerPage})
    },

    data(){

        return {
            active: 1
        }

    },

    computed:{

        total(){
            return this.resource.last_page || 1
        },

        totalRegistries(){
            return this.resource.total || 0
        },

        resource(){

            return this.$store.state.bank.bankList

        }

    },

    methods: {
        navigate(n){

            this.active = n

            let config = {
                limit: this.totalPerPage,
                page: n
            }

            this.$store.dispatch(this.resourceMethod, config)

        }
    }
    
}
</script>