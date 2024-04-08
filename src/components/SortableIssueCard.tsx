import { Card } from 'antd'
import { getHowManyDaysAgo } from '../utils/howManyDaysAgo'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Issue } from '../@types/issues'

export function SortableIssueCard({ issue }: { issue: Issue }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: issue.id,
        data: {
            type: 'issue',
            issue,
        },
    })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    if (isDragging) {
        return (
            <Card
                title={issue.title}
                className="w-full cursor-move opacity-50"
                ref={setNodeRef}
                style={style}
            >
                <p>#{issue.number}</p>
                <p>open{getHowManyDaysAgo(issue.created_at)}</p>
                <p>Comments {issue.comments}</p>
            </Card>
        )
    }

    return (
        <Card
            title={issue.title}
            className="w-full cursor-move"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
        >
            <p>#{issue.number}</p>
            <p>open{getHowManyDaysAgo(issue.created_at)}</p>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                Comments {issue.comments}
            </a>
        </Card>
    )
}
