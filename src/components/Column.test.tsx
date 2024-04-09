import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Column } from './Column'
import { Issue } from '../types/issues' // replace with your actual Issue type import

vi.mock('react-sortable-hoc', () => ({
    SortableContext: vi.fn(({ children }) => <div>{children}</div>),
    useSortable: vi.fn().mockReturnValue({
        attributes: {},
        listeners: {},
        setNodeRef: vi.fn(),
    }),
}))

vi.mock('./SortableIssueCard', () => ({
    SortableIssueCard: vi.fn(({ issue }) => <div>{issue.title}</div>),
}))

describe('Column', () => {
    const mockIssues: Issue[] = [
        { id: '1', title: 'Issue 1' },
        { id: '2', title: 'Issue 2' },
    ]

    it('renders without crashing', () => {
        render(
            <Column
                column={{ id: '1', title: 'Column 1' }}
                issues={mockIssues}
            />
        )
        expect(screen.getByText('Column 1')).toBeInTheDocument()
    })

    it('renders the correct number of issues', () => {
        render(
            <Column
                column={{ id: '1', title: 'Column 1' }}
                issues={mockIssues}
            />
        )
        expect(screen.getByText('Issue 1')).toBeInTheDocument()
        expect(screen.getByText('Issue 2')).toBeInTheDocument()
    })
})
