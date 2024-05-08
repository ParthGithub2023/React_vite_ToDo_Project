
import Todolistcomponent from "./components/Todolistcomponent";

import Addtodoform from "./components/todoform";
import TodoSummary from "./components/SummaryTodo";
import useTodo from "./hooks/TodoHooks";



function App() {

  const {
    todo,
    AddtoForm,
    setcompletionState,
    deleteTodoTask,
    deleteAllCompletedTodos,
  } = useTodo();


  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-extrabold text-2xl text-center bg-slate-500 py-3">My To Dos List</h1>
      <div className=" max-2=lg mx-auto space-y-5 ">
        <Addtodoform onSubmit={AddtoForm}/>
        <Todolistcomponent 
        PropTodo={todo}
        onCompletedChange={setcompletionState}
        onDelete={deleteTodoTask}
        />
        <TodoSummary 

        Summarytodo={todo}
        deleteAllCompleted={deleteAllCompletedTodos}

        />
        </div>  
         
    </main>
    
  )
}

export default App
