import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import OpenIssues from './OpenIssues'
import { useStore } from '../store'
import { getRepo } from '../utils/getRepoName'

vi.mock('../store')
vi.mock('../utils/getRepoName')

describe('OpenIssues', () => {
    it('renders without crashing', () => {
        useStore.mockReturnValue({ searchHistory: [], setSearch: vi.fn() })
        render(<OpenIssues />)
        expect(screen.getByTestId('opent-issue')).toBeInTheDocument()
    })

    it('renders buttons for each search history item', () => {
        useStore.mockReturnValue({
            searchHistory: ['owner1/repo1', 'owner2/repo2'],
            setSearch: vi.fn(),
        })
        getRepo.mockImplementation((search) => search.split('/')[1])
        render(<OpenIssues />)
        expect(screen.getByText('repo1')).toBeInTheDocument()
        expect(screen.getByText('repo2')).toBeInTheDocument()
    })
})
