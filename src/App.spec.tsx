import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from './App.tsx'

test('renders name', async () => {
  const { getByText, getByRole } = render(<App />)

  await getByRole('button', { name: 'count is 0'}).click()

  await expect.element(getByText('count is 1')).toBeInTheDocument()
})