import * as MUTATIONS from './mutations'
export default{
    addTodo({commit},todoText){
        commit('addTodo',todoText)
    },
    removeTodo({commit},index){
        commit('removeTodo',index)
    }
}