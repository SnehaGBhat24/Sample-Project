

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // Users:{
        //     name:'',
        //     email:'',
        //     password:'',
        // },
        Users:[],
       text:'',
    },
    mutations: {
        registerUser(state,data) {
             state.Users.push(data);
             console.log('push',state.Users)
        }
    },
    actions: {
        register(context,data){
            // console.log('data', data)
            context.commit('registerUser',data);
            
        }
    },
})