import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext'

test('navigation works', async () => {
  const { getByText } = render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  )

  // Verify Main page elements are visible by default (route /)
  await expect.element(getByText('Main')).toBeInTheDocument()
  
  // Verify the About navigation element is present
  await expect.element(getByText('About')).toBeInTheDocument()
  
  // Verify the auth buttons are present
  await expect.element(getByText('Sign In')).toBeInTheDocument()
  await expect.element(getByText('Sign Up')).toBeInTheDocument()
})