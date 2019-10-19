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
            Vue.http.get('localhost:8000/api/accounts').then(
                response  => {
                    context.commit('updateAccountList', response.data)
                }
            )
        }

    }

    

}