import { useEffect, useState, useCallback } from 'react'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Message } from 'primereact/message'
import { useAuth } from '../../hooks/useAuth'
import { getTodoLists } from '../../services/todoListService'
import { TodoListItem } from './TodoListItem'
import { TodoListForm } from './TodoListForm'
import type { TodoList } from '../../types/todoList'

export function TodoListContainer() {
  const [todoLists, setTodoLists] = useState<TodoList[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()

  const fetchTodoLists = useCallback(async () => {
    if (!user) return

    setLoading(true)
    setError(null)

    try {
      const lists = await getTodoLists(user.id)
      setTodoLists(lists)
    } catch (err) {
      console.error('Error fetching todo lists:', err)
      setError('Failed to load todo lists. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [user])

  // Fetch todo lists when component mounts or user changes
  useEffect(() => {
    fetchTodoLists()
  }, [fetchTodoLists])

  // If not authenticated
  if (!user) {
    return <Message severity="info" text="Please sign in to view your todo lists" />
  }

  return (
    <div>
      <TodoListForm onListCreated={fetchTodoLists} />

      <h2>Your Todo Lists</h2>

      {loading ? (
        <div className="flex justify-content-center">
          <ProgressSpinner />
        </div>
      ) : error ? (
        <Message severity="error" text={error} />
      ) : todoLists.length === 0 ? (
        <Message severity="info" text="You don't have any todo lists yet" />
      ) : (
        <div>
          {todoLists.map((list) => (
            <TodoListItem key={list.id} todoList={list} />
          ))}
        </div>
      )}
    </div>
  )
}