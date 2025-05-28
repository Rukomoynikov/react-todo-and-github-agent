import { useState } from 'react'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { createTodoList } from '../../services/todoListService'
import { useAuth } from '../../hooks/useAuth'

interface TodoListFormProps {
  onListCreated: () => void
}

export function TodoListForm({ onListCreated }: TodoListFormProps) {
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !user) return

    setLoading(true)

    try {
      await createTodoList({
        title: title.trim(),
        owner: user.id
      })
      
      setTitle('')
      onListCreated()
    } catch (error) {
      console.error('Failed to create todo list:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="Create New Todo List" className="mb-4">
      <form onSubmit={handleSubmit} className="flex flex-column gap-2">
        <div className="p-float-label">
          <InputText
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
            className="w-full"
          />
          <label htmlFor="title">List Title</label>
        </div>
        <Button
          type="submit"
          label="Create List"
          icon="pi pi-plus"
          loading={loading}
          disabled={!title.trim() || loading}
          className="mt-2"
        />
      </form>
    </Card>
  )
}