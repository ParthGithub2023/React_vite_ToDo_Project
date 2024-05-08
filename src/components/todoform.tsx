import { useState } from "react"



interface TodoformProps
{
    onSubmit: (title: string)=> void; 
}
export default function Addtodoform({onSubmit}:  TodoformProps) 
{


    const [input , setinput]=useState("");


    function handleSubmit(e : React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();

        if(!input.trim()) return;
        
        onSubmit("New Task : " + input);
        setinput(" ");

    }

    return(
        <form className="flex"
        onSubmit={handleSubmit}>
            <input 
            value = {input}
            onChange={(e)=> setinput(e.target.value)}

            placeholder="Add here "
            className="rounded-s-md text-center font-semibold text-slate-900 grow py-2 border-gray-600"
            />
            <button type="submit" className=" scale-95 size-14 rounded-e-md bg-black text-white hover:bg-gray-600">
                Add
            </button>
            
        

        </form>
    )
}