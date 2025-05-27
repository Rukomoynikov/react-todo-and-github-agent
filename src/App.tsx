import './App.css'
import { Menubar } from 'primereact/menubar'
import { AppRoutes } from './routes'

function App() {
  const menuItems = [
    {
      label: 'Main',
      icon: 'pi pi-home',
      command: () => {
        window.location.href = '/'
      }
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      command: () => {
        window.location.href = '/about'
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
