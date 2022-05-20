import { render } from 'solid-testing-library'
import { describe, expect, test } from 'vitest'
import App from './App'

describe('<App />', () => {
  test('should render correctly', () => {
    const { container } = render(() => <App />)

    expect(container.textContent).toBe('Welcome to Solid!')
  })
})
