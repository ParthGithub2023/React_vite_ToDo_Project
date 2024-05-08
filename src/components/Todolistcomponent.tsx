import TodoComponent from "./todocomponent";
import { ListTodo} from "../types/todolist"



interface todolistprops
{
    PropTodo : ListTodo[];
    onCompletedChange: (id : number , completed :  boolean) => void; 
    onDelete: (id : number )=> void;
}

export default function todolist({
    

    PropTodo: todo,
    onCompletedChange,
    onDelete
    
}: todolistprops) {

    const todoSorted =  todo.sort((a,b)=> {
        if (a.completed===b.completed)
        
        {
            return a.id-b.id;
        }
        return a.completed ? 1 :-1
    })
    return(
        <>
        <div className="p-10 space-y-5 bg-slate-100 ">
        
        {todoSorted.map((todolist: ListTodo) =>( 
       <TodoComponent 
            key={todolist.id}
            todolist={todolist}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
       /> ))}
       </div>
       {todolist.length === 0 && (
        <p className="text-center py-2">
            No Tasks Found. <br></br>
            Enjoy the Rest Of Your Day
        </p>
       )}
       </>
    )
}