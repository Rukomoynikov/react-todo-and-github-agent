import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

test('navigation works', async () => {
  const { getByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  // Verify Main page elements are visible by default (route /)
  await expect.element(getByText('Main')).toBeInTheDocument()
  
  // Verify the About navigation element is present
  await expect.element(getByText('About')).toBeInTheDocument()
})