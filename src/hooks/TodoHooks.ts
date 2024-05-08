import { useEffect, useState } from "react";
import { ListTodo } from "../types/todolist";
import { list1 } from "../data/todolist";


export default function useTodo(){
    const [todo , todostate] =useState(() =>{
        const SavedStateTodo: ListTodo[] = JSON.parse(localStorage.getItem("todo") || "[]");
        return SavedStateTodo.length > 0 ? SavedStateTodo : list1 
       })
      
      
       useEffect(() =>{
      
        localStorage.setItem("todo" , JSON.stringify(todo))
      
       } , [todo])
      
      
          //how to change the outlook when a task is completed (in this case , a checkbox is checked)
          function setcompletionState(id : number , completed :  boolean){
            todostate((prevState) =>
             prevState.map((todolist) => (todolist.id === id ? {...todolist , completed } : todolist))
            )
          }
      
          function deleteTodoTask(id: number){
            todostate(prevState => prevState.filter(todo => todo.id !== id))
          }
      
          function deleteAllCompletedTodos(){
            todostate(prevSate => prevSate.filter (todo => !todo.completed))
          }
          function AddtoForm(title : string)
          {
            todostate (prevState =>[
              {
                id : Date.now(),
                title,
                completed: false
              },
              ...prevState
            ])
            
          }
          return{
            todo,
            AddtoForm,
            setcompletionState,
            deleteTodoTask,
            deleteAllCompletedTodos,
            

        }
        
          
}