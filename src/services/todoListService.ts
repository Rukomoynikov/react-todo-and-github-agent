import { supabase } from '../libs/supabase'
import type { TodoList, CreateTodoListParams } from '../types/todoList'

// Function to fetch all todo lists for a user
export const getTodoLists = async (userId: string): Promise<TodoList[]> => {
  try {
    const { data, error } = await supabase
      .from('todo-list')
      .select('*')
      .eq('owner', userId)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return data || []
  } catch (error) {
    console.error('Error fetching todo lists:', error)
    throw error
  }
}

// Function to create a new todo list
export const createTodoList = async ({ title, owner }: CreateTodoListParams): Promise<TodoList> => {
  try {
    const { data, error } = await supabase
      .from('todo-list')
      .insert([{ title, owner }])
      .select()
      .single()

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error creating todo list:', error)
    throw error
  }
}