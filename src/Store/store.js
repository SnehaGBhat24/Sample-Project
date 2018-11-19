

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        Users:[],
    },
    mutations: {
        registerUser(state,data) {
            var a = state.Users;
             state.Users.push(data);
             console.log('push',state.Users);
             axios({
                method: 'post',
                url: 'https://demo4583449.mockable.io/register',
                data: state.Users,
                })
            .then(function (response) {
           //handle success
           console.log(response.config.data);
       })
           .catch(function (response) {
           //handle error
           console.log(response);
       });
        },
    },
    actions: {
        register(context,data){
            // console.log('data', data)
            context.commit('registerUser',data);
            
        }
    },
})