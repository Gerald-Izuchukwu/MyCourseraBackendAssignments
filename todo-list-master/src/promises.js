const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
getAllTodos = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(todolist.length == 0){
                return reject('Todo List is empty')

            }
            todos = todolist
            resolve(todos)
        }, 1000)
        
    }) 
    
}
// Define a function to add a todo to the todolist array
createTodo = (todo) => {
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(!todo){
                return reject('No data to be added')
            }
            const addTodo = todolist.push(todo)
            resolve(addTodo)
        }, 1000);
      
   })
}
module.exports ={
    createTodo,getAllTodos
}