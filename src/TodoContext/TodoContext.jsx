import { createContext, useState } from "react"
 
export const TodoDataContext = createContext(null); 

const TodoContext = (props) => {
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  return (
     <TodoDataContext.Provider value={{todo, setTodo}}> 
       {props.children}
     </TodoDataContext.Provider>
  )
}

export default TodoContext

