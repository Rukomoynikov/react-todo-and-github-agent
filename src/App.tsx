import './App.css'
import { Menubar } from 'primereact/menubar'
import { AppRoutes } from './routes'
import { useNavigate } from 'react-router-dom'
import { AuthButtons } from './components/auth/AuthButtons'
import { useAuth } from './hooks/useAuth'

function App() {
  const navigate = useNavigate()
  const { user } = useAuth()
  
  const menuItems = [
    {
      label: 'Main',
      icon: 'pi pi-home',
      command: () => {
        navigate('/')
      }
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      command: () => {
        navigate('/about')
      }
    }
  ]

  // Add todo lists menu item only for authenticated users
  if (user) {
    menuItems.push({
      label: 'Todo Lists',
      icon: 'pi pi-list',
      command: () => {
        navigate('/todo-lists')
      }
    })
  }

  const end = <AuthButtons />

  return (
    <>
      <Menubar model={menuItems} end={end} className="mb-4" />
      
      <AppRoutes />
    </>
  )
}

export default App
