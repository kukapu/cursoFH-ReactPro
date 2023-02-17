import { Todo } from "../interfaces/interfaces"
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useTodos } from "../hooks/useTodos";

interface TodoItemProps {
  todo: Todo
}


export const TodoItem = ( { todo }: TodoItemProps ) => {

  // const { toggleTodo } = useContext( TodoContext )
  const { toggleTodo } = useTodos()

  // const handleDbClick = () => {
  //   toggleTodo( todo.id )
  // }

  return (
    <li
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
      onDoubleClick={ () => toggleTodo( todo.id ) }>
      { todo.title } ( { todo.completed ? 'Completed' : 'Pending' } )
    </li>
  )
}
