<template>
  <div class="hello">
    <input v-model='todoText' @keydown.enter='addTodo'>
    <button @click='addTodo'>添加todo</button>
    <ul>
      <li v-for='todo in todoList' v-if='todo.haveDone==false' :key='todo.index' @click='removeTodo(todo.index)'>{{todo.text}}<button>X</button></li>
      共有{{length}}件todos
    </ul>
  </div>
  
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      todoText:'',
    }
  },
    methods:{
      addTodo(){
        this.$store.dispatch('addTodo',this.todoText)
        this.todoText = ''
      },
      removeTodo(index){
        this.$store.dispatch('removeTodo',index)
      }
    },
    computed:{
      ...mapState([
        'todoList',
        
      ]),
      length(){return this.$store.getters.count}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
