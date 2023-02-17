import { useContext } from "react"
import { TodoContext } from '../context/TodoContext';
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {

  // const { todoState } = useContext( TodoContext )
  // const { todoCount, pending, completed } = todoState
  const { todos } = useTodos()


  return (
    <>
      {/* <h2> Total: { todoCount } - Pendientes: { pending } - Completadas: { completed }</h2> */}
      <ul>
        {
          // // todoState.todos.map( todo => <TodoItem key={ todo.id } todo={ todo } /> )
          todos.map( todo => <TodoItem key={ todo.id } todo={ todo } /> )
        }
      </ul>
    </>
  )
}
