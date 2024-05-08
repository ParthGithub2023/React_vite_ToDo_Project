import { ListTodo} from "../types/todolist"


interface TodoSummaryProps{
    
    Summarytodo : ListTodo[]
    deleteAllCompleted : () => void;
}

export  default function TodoSummary({
    Summarytodo,
    deleteAllCompleted,

}: TodoSummaryProps)
{
    const completedTodo = Summarytodo.filter(PropTodo => PropTodo.completed);

    return (
        <div className="text-center py-3 space-y-4">
             
            <p className=" gap-2 border rounded-md py-3  border-blue-400  bg-white-600  ">
                {completedTodo.length}/{Summarytodo.length}  Tasks Completed
            </p>
            {completedTodo.length >0 && (
                <button 
                onClick={deleteAllCompleted}
                className="scale-150 rounded bg-slate-400 hover:bg-blue-600 hover:font-bold px-4">
                    Delete
                </button>
            )}
           
        </div>
    )

    

}