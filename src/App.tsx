import { Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import About from './pages/About'
import { Menubar } from 'primereact/menubar'

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
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
