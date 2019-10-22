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

        getBanks(context, config){

            if (!config.page){
                config.page = 1
            }

            if (!config.limit){

                config.limit = 200

            }

            Vue.http.get('api/banks?limit=' + config.limit + '&page=' + config.page).then(
                response  => {
                    context.commit('updateBankList', response.data)
                }
            )
        }

    }

    

}