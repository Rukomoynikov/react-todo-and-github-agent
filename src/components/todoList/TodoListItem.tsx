import { Card } from 'primereact/card'
import type { TodoList } from '../../types/todoList'

interface TodoListItemProps {
  todoList: TodoList
}

export function TodoListItem({ todoList }: TodoListItemProps) {
  // Format the date
  const formattedDate = new Date(todoList.created_at).toLocaleDateString()

  return (
    <Card
      title={todoList.title}
      subTitle={`Created: ${formattedDate}`}
      className="mb-3"
    >
      <p>Todo list ID: {todoList.id}</p>
    </Card>
  )
}