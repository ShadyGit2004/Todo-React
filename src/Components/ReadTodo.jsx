import React, { useContext } from 'react'
import { TodoDataContext } from '../TodoContext/TodoContext'
import { toast } from 'react-toastify'

const ReadTodo = () => {
    
    const {todo, setTodo} = useContext(TodoDataContext);

    function handleDelete(id) {
        let newTodos = todo.filter((t)=> t.id != id)
        setTodo(newTodos)    
        localStorage.setItem("todos", JSON.stringify(newTodos))
        toast.success("Task Deleted!")    
    }    

    function handleIsCompleted(id){
        let newTask = todo.find((tsk)=> tsk.id==id)
        newTask.isCompleted ? newTask.isCompleted = false : newTask.isCompleted = true
        setTodo([...todo])
        localStorage.setItem("todos", JSON.stringify([...todo]))
    }  

    const renderTodos = todo.map(t =>
        <li className= 'flex justify-between items-center bg-gray-800 rounded p-2 mb-2' key={t.id}> {t.task} 
        <div className='inline-flex items-center gap-7'>
            <span onClick={()=>handleIsCompleted(t.id)} className={`py-2 px-4 text-sm opacity-50 cursor-pointer ${t.isCompleted ? "text-green-400" : "text-rose-400"}`}>
            {`${t.isCompleted ? "Completed!" : "Pending"}`}</span>        
            <span onClick={()=>{handleDelete(t.id)}} className='text-rose-600 text-sm cursor-pointer'>Delete</span>
        </div>
        </li>
    )

    return (
       <>
        <div className="w-full mt-0 overflow-auto scrollbar-none md:mt-3 lg:w-[40%] relative">
        <h1 className='text-5xl font-light pb-10 mb-0 sticky top-0 z-1 bg-gray-900 md:mb-6'>All <span className='text-rose-300'>Todos</span></h1>
            <ol className='text-lg'>
                {renderTodos.length > 0 ? renderTodos : <span className='text-sm opacity-50 leading-0'>No Pending Todos!</span>}
            </ol>
        </div>
       </>
    )
}

export default ReadTodo
