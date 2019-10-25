<template>
    <div class="row" id="login">
        <div class="content-header center-align">
            <h1>Login <small>Acesso ao painel</small></h1>
        </div>
        <div class="card col s4 offset-s4">

            <div class="card-content">
            <div class="card-title">Acesso ao sistema</div>
            <form class="row" autocomplete="off" @submit.prevent="login" >
                <div class="input-field col s12">
                <input name="email" type="email" v-model="user.username" id="email" class="validate" placeholder="Informe seu email..." required>
                <label for="email" class="active">Email</label>
                </div>
                <div class="input-field col s12">
                <input name="password" type="password" v-model="user.password" id="password" class="validate" placeholder="Informe sua senha" required>
                <label for="password" class="active">Senha</label>
                </div>
                <div class="input-field col s12">
                <input type="submit" class="waves-effect waves-light btn-large blue-grey darken-4" value="salvar">
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>

import { CONFIG } from '@/config.js'
import Vue from 'vue'


export default {

    name: 'login',

    data(){
       return {
           user: {}
       }
    },

    methods:{

        login(){
            let data = {
                grant_type: 'password',
                client_id: CONFIG.client_id,
                client_secret: CONFIG.client_secret,
                username: this.user.username,
                password: this.user.password,
                scope: ''
            }

            Vue.http.post('oauth/token', data).then(res => {
                localStorage['token'] = JSON.stringify(res.body)
                this.$router.push('/contas')
            })
        }

    }
    
}
</script>

<style>
    #login {
        background-color: #eee !important;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 99999;
        padding: 20px;
    }
</style>