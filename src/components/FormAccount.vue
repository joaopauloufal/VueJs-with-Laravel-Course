<template>
    <div class="row">
    <div class="content-header">
        <h1>Contas bancárias <small>{{ sub_title }}</small></h1>
        <div class="grey-text">
        <small>
            <a href="#/">iFinance</a> 
            <a href="#/contas">Suas contas</a> 
            <span>Suas contas</span>
        </small>
        </div>
    </div>

    <div class="card col s12">
        <div class="card-content">
        <form class="row" autocomplete="off" @submit.prevent="saveOrUpdate">
            <div class="input-field col s12">
            <h5>Dados da conta</h5>
            </div>
            <div class="input-field col s6">
            <input v-model="account.title" type="text" id="title" class="validate" placeholder="Como você prefere identificar esta conta?" required>
            <label for="title" class="active">Título da conta</label>
            </div>
            <div class="input-field col s6">
            <input v-model="account.balance_initial" type="text" id="balance_initial" class="validate" placeholder="Qual o valor inicial desta conta?" required>
            <label for="title" class="active">Valor inicial</label>
            </div>
            <div class="input-field col s6">
            <select class="browser-default" v-model="account.bank_id">
                <option value="0">Escolha um banco</option>
                <option v-for="bank in banks.data" :value="bank.id" class="left circle">{{bank.title}} ({{bank.code}})</option>
            </select>
            <label for="" class="active">Qual seu banco?</label>
            </div>
            <div class="input-field col s6">
            <input v-model="account.agency" type="number" id="agency" class="validate" placeholder="Qual o número da sua agencia?" required>
            <label for="agency" class="active">Número da agência</label>
            </div>
            <div class="input-field col s6">
            <input v-model="account.account_number" type="number" id="account_number" class="validate" placeholder="Qual o número da sua conta?" required>
            <label for="accont_number" class="active">Número da conta</label>
            </div>
            <div class="input-field col s6">
            <input type="submit" class="waves-effect waves-light btn-large blue-grey darken-4" value="salvar">
            </div>
        </form>
        </div>
        <div class="card-action">
        <a href="#/contas">Voltar</a>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    
    name: 'form-account',
    props : ['sub_title', 'banks', 'account'],


    methods: {
        saveOrUpdate(){

            if (this.$store.state.route.name == 'accounts-create'){
                this.$parent.save()
            } else if (this.$store.state.route.name == 'accounts-edit'){
                this.$parent.edit()
            }
            
        }
    }

    
}
</script>