export interface TodoList {
  id: number
  created_at: string
  title: string
  owner: string
}

export interface CreateTodoListParams {
  title: string
  owner: string
}