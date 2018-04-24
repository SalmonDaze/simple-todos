import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:0,
        todoList:[],
        todos:{
            text:'',
            index:'',
            haveDone:false,
        },
    },
    mutations:mutations,
    actions:actions,
    getters:{
        filters(state){
            return state.todoList.filter((todo)=> {return todo.haveDone == false})
        },
        count(state,getters){
            return  getters.filters.length
        }
    }
})