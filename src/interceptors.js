import Vue from 'vue'

let getToken = function(){

    let token = localStorage['token']

    if (!token){
        token = '{}'
    }

    return JSON.parse(token)

}

let login = function(router){
    router.push('/login')
}

export default {

    check_empty_token(router){

        let token = getToken()
        if (!token.access_token){
            login(router)
        }

    },

    check_auth(){

        let token = getToken()

        Vue.http.interceptors.push((request, next) => {
            request.headers.set('Authorization', 'Bearer ' + token.access_token)
            next();
        })

    }

}