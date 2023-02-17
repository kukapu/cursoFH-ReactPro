import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { useReducer } from 'react';
import { todoReducer } from "./todoReducer";

const  INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: 1,
      title: "Learn React",
      completed: false
    },
    {
      id: 2,
      title: "Learn TypeScript",
      completed: false
    }
  ],
  completed: 0,
  pending: 2
}

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[]
}


export const TodoProvider = ({ children }: TodoProviderProps ) => {

  const [ todoState , dispatch ] = useReducer( todoReducer, INITIAL_STATE )

  const toggleTodo = ( id: number ) => {
    dispatch({ type: 'toogleTodo', payload: { id } })
  }


  return (
    <TodoContext.Provider value={{ 
      todoState,
      toggleTodo
    }}>
      { children }
    </TodoContext.Provider> 
  )
}
