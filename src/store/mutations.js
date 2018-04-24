export default{
    addTodo(state,todoText){
        let todos = {}
        todos.text = todoText
        todos.index = state.count
        todos.haveDone = false
        state.todoList.push(todos)
        state.count++
    },
    removeTodo(state,index){
        state.todoList.map((item,zindex)=>{
            console.log(zindex,index)
            if(item.index == index){
                item.haveDone = true
            }
        })
    }
}