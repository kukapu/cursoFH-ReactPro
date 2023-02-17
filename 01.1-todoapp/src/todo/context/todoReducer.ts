import { Todo, TodoState } from "../interfaces/interfaces";

export type TodoAction = 
  | { type: 'addTodo', payload: Todo }
  | { type: 'toogleTodo', payload: { id: number } }

export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {

  switch ( action.type ) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload ],
      }
    case "toogleTodo":

      const todoIndex = state.todos.findIndex( todo => todo.id === action.payload.id )
      
      if ( state.todos[todoIndex].completed ) {
        return {
          ...state,
          todos: state.todos.map( todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo),
          completed: state.completed - 1,
          pending: state.pending + 1
        }
      } else {
        return {
          ...state,
          todos: state.todos.map( todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo),
          completed: state.completed + 1,
          pending: state.pending - 1
        }
      }
  }

}