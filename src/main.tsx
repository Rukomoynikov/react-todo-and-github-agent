import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext'

// PrimeReact imports
import 'primereact/resources/themes/lara-light-indigo/theme.css'  // Theme
import 'primereact/resources/primereact.min.css'                  // Core CSS
import 'primeicons/primeicons.css'                               // Icons

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
