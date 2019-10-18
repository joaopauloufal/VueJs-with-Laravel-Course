<template>
    <div class="row">
    <div class="content-header">
        <h1>Conta título <small>Detalhes</small></h1>
        <div class="grey-text">
        <small>
            <a href="#/">iFinance</a> >
            <a href="/contas">Suas contas</a> >
            <span>Suas contas</span>
        </small>
        </div>
    </div>

    <div class="card col s12">
        <div class="card-content">
        <div class="row">
            <div class="col s9">
            <div class="card-title">Detalhes da conta</div>
            <p>Agência: 000 / Conta: 000 </p>
            <p>Banco: nome - 000</p>
            <p>Valor inicial da conta: R$ 000</p>
            </div>
            <div class="col s3 right-align">
            <p>Saldo: <span class="btn disabled">000</span></p>
            </div>
        </div>
        <div class="row">
            <div class="col s12">
            <a :href="'/contas/1/editar'" class="btn blue">Editar</a>
            <a href="" class="btn red" @click.prevent="remove(1)">Excluir</a>
            </div>
        </div>
        </div>
        <div class="card-action">
        <a href="/contas">Voltar</a>
        </div>
    </div>
    </div>
</template>

<script>
export default {

    name: 'accounts-view',

    methods: {

        remove(id){

            this.$router.push('/contas');

        }

    }
    
}
</script>