import Vue from 'vue'

export default {

    state: {

        accountList: []

    },

    mutations: {

        updateAccountList(state, data){

            state.accountList = data

        }

    },

    actions : {

        getAccounts(context){
            Vue.http.get('api/accounts').then(
                response  => {
                    context.commit('updateAccountList', response.data)
                }
            )
        }

    }

    

}