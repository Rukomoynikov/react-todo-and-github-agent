import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import About from './About.tsx'

test('renders about page', async () => {
  const { getByText } = render(<About />)

  await expect.element(getByText('About')).toBeInTheDocument()
  await expect.element(getByText('About This App')).toBeInTheDocument()
  await expect.element(getByText('React Router for navigation')).toBeInTheDocument()
})