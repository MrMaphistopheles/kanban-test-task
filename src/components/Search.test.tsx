import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Search from './Search'

describe('Search component', () => {
    it('renders without crashing', () => {
        render(<Search />)
    })
})
