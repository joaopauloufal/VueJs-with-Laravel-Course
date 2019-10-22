import Vue from 'vue'

export default {

    state: {

        bankList: [],

    },

    mutations: {

        updateBankList(state, data){

            state.bankList = data

        }

    },

    actions : {

        getBanks(context, totalPerPage){
            Vue.http.get('api/banks?limit=200').then(
                response  => {
                    context.commit('updateBankList', response.data)
                }
            )
        }

    }

    

}