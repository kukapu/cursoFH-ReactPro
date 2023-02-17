
export interface Todo {
  id: number,
  title: string,
  completed: boolean,
}

export interface TodoState {
  todoCount: number,
  todos: Todo[],
  completed: number,
  pending: number,
}