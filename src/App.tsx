import './App.css'
import { Menubar } from 'primereact/menubar'
import { AppRoutes } from './routes'
import { useNavigate } from 'react-router-dom'
import { AuthButtons } from './components/auth/AuthButtons'

function App() {
  const navigate = useNavigate()
  
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

  const end = <AuthButtons />

  return (
    <>
      <Menubar model={menuItems} end={end} className="mb-4" />
      
      <AppRoutes />
    </>
  )
}

export default App
