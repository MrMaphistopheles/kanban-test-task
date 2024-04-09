// FILEPATH: /Users/basylmarchak/Desktop/test task/kanban-test/src/components/SortableIssueCard.test.tsx

import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { SortableIssueCard } from './SortableIssueCard'
import { useSortable } from '@dnd-kit/sortable'
import { Issue } from '../types/issues' // Import the Issue type from where it's defined

vi.mock('@dnd-kit/sortable')

const mockIssue: Issue = {
    id: '1',
    title: 'Test Issue',
    number: 123,
    created_at: new Date().toISOString(),
    comments: 5,
    html_url: 'http://test.com',
}

describe('SortableIssueCard', () => {
    beforeEach(() => {
        useSortable.mockReturnValue({
            attributes: {},
            listeners: {},
            setNodeRef: vi.fn(),
            transform: null,
            transition: null,
            isDragging: false,
        })
    })

    it('renders without crashing', () => {
        render(<SortableIssueCard issue={mockIssue} />)
        expect(screen.getByText('Test Issue')).toBeInTheDocument()
    })

    it('displays issue number', () => {
        render(<SortableIssueCard issue={mockIssue} />)
        expect(screen.getByText('#123')).toBeInTheDocument()
    })

    it('displays comments count', () => {
        render(<SortableIssueCard issue={mockIssue} />)
        expect(screen.getByText('Comments 5')).toBeInTheDocument()
    })

    it('renders differently when dragging', () => {
        useSortable.mockReturnValue({
            attributes: {},
            listeners: {},
            setNodeRef: vi.fn(),
            transform: null,
            transition: null,
            isDragging: true,
        })
        render(<SortableIssueCard issue={mockIssue} />)
    })
})
