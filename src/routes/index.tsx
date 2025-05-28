import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import About from '../pages/About'
import TodoLists from '../pages/TodoLists'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/todo-lists" element={<TodoLists />} />
    </Routes>
  )
}