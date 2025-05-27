import './App.css'
import { Menubar } from 'primereact/menubar'
import { AppRoutes } from './routes'
import { useNavigate } from 'react-router-dom'

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

  return (
    <>
      <Menubar model={menuItems} className="mb-4" />
      
      <AppRoutes />
    </>
  )
}

export default App
