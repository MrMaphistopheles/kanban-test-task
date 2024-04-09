import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import App from './App'

describe('renders App component', () => {
    it('renders without error', () => {
        render(<App />)
    })
})
