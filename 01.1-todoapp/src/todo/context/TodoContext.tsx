import { createContext } from "react";
import { TodoState } from '../interfaces/interfaces';

export type TodoContextProps = {
  todoState: TodoState,
  toggleTodo: ( id: number ) => void,
}

export const TodoContext = createContext<TodoContextProps>( {} as TodoContextProps )