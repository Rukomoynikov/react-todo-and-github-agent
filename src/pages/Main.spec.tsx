import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import Main from './Main.tsx'

test('renders counter and increments', async () => {
  const { getByText, getByRole } = render(<Main />)

  await getByRole('button', { name: 'count is 0'}).click()

  await expect.element(getByText('count is 1')).toBeInTheDocument()
})