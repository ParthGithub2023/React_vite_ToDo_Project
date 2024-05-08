import { Trash2 } from "lucide-react";
import { ListTodo } from "../types/todolist"

interface TodoComponentProps {
    todolist: ListTodo
    onCompletedChange: (id : number , completed :  boolean) => void; 
    onDelete:(id: number) => void;


}


export default function TodoComponent({todolist , onCompletedChange , onDelete}: TodoComponentProps){
    return(
        <div className="flex grow gap-3" >
             <label className="flex items-center gap-2 border rounded-md p-2 grow border-blue-400  bg-white-600 hover:bg-slate-500">  
            <input type="checkbox" 
            
            checked={todolist.completed}
            onChange={(e) => onCompletedChange (todolist.id , e.target.checked)}
            className="scale-100"  />
            
            <span className={todolist.completed ? "line-through text-green-600" : ""}>
                {todolist.title}
            </span>
            
            </label> 
            
            <button onClick={() => onDelete(todolist.id)} className="py-3" >
                <Trash2 size={20} className="" />
            </button>
            
        </div>
    )
}