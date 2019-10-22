import Vue from 'vue'

export default {

    state: {

        getList: [],

    },

    mutations: {

        updateList(state, data){

            state.getList = data

        }

    },

    actions : {

        getRegistries(context, config){

            if (!config.page){
                config.page = 1
            }

            if (!config.limit){

                config.limit = 200

            }

            Vue.http.get('api/' + config.resource + '?limit=' + config.limit + '&page=' + config.page).then(
                response  => {
                    context.commit('updateList', response.data)
                }
            )
        }

    }

    

}