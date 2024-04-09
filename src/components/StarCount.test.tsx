import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import StarCount from './StarCount'
import { useStore } from '../store'
import { useQuery } from '@tanstack/react-query'

vi.mock('../store')
vi.mock('@tanstack/react-query')
vi.mock('../utils/getStarsCount')

describe('StarCount', () => {
    it('renders without crashing', () => {
        useStore.mockReturnValue({ search: 'owner/repo' })
        useQuery.mockReturnValue({
            data: 1000,
            isLoading: false,
            refetch: vi.fn(),
        })
        render(<StarCount />)
        expect(screen.getByTestId('stars')).toBeInTheDocument()
    })

    it('displays star count when data is loaded', () => {
        useStore.mockReturnValue({ search: 'owner/repo' })
        useQuery.mockReturnValue({
            data: 5000,
            isLoading: false,
            refetch: vi.fn(),
        })
        render(<StarCount />)
        expect(screen.getByTestId('stars')).toBeInTheDocument()
    })
})
