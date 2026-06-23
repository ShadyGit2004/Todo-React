import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { TodoDataContext } from '../TodoContext/TodoContext';

const CreateTodo = () => { 
    
    let {todo, setTodo} = useContext(TodoDataContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    function addTodo(data) {
        let task = data.task.trim()
       if(task){
         setTodo([...todo, {
        id : nanoid(),
        task : task,
        isCompleted : false
        }])   
        
        reset()
        toast.success("Todo created")
       }else{
        reset()  
        toast.error("Please enter valid tasks")
       }
    }
    localStorage.setItem("todos", JSON.stringify(todo))

    return (
        <div className="border-b-2 h-fit w-full my-0 pb-12 lg:pb-18 lg:w-[60%]">          
          <h1 className='text-5xl font-light mb-15'>Create <span className='text-purple-300'>Pending</span> Todo</h1>
          <form onSubmit={handleSubmit(addTodo)}>
            <input {...register("task", {required : true}) } className='border-b py-1 outline-0 mr-7 w-[67%] text-lg md:w-[20rem]' type="text" placeholder='Enter Task...' /> 
            <button className='text-md border cursor-pointer rounded py-1 px-2'>Add Todo</button> 
            <p className="text-rose-600 text-sm pt-4 leading-0">{errors.task && "Task required"}</p>
          </form>
    </div>
    )
}

export default CreateTodo
