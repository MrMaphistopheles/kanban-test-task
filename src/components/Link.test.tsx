import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import Link from './Link'

describe('Link component', () => {
    it('renders without error', () => {
        render(<Link />)
    })
})
