import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// PrimeReact imports
import 'primereact/resources/themes/lara-light-indigo/theme.css'  // Theme
import 'primereact/resources/primereact.min.css'                  // Core CSS
import 'primeicons/primeicons.css'                               // Icons

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
