import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { Issue } from '../types/issues'
import { SortableIssueCard } from './SortableIssueCard'
import { useMemo } from 'react'

export function Column({
    column,
    issues,
}: {
    column: { id: string; title: string }
    issues: Issue[]
}) {
    const issueIds = useMemo(() => issues.map((issue) => issue.id), [issues]) // useMemo hook to memoize the issue IDs

    const { attributes, listeners, setNodeRef } = useSortable({
        // useSortable hook to handle sorting
        id: column.id,
        data: { type: 'column', column },
    })

    return (
        <div
            className="flex flex-col items-center lg:w-[25em] justify-start gap-1 lg:gap-3 px-2 lg:px-5 py-3 lg:py-7 w-11/12 h-[15em] lg:h-[35em] bg-slate-100 rounded-xl"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            <h3 className="text-2xl">{column.title}</h3>
            <div className="flex flex-col items-center justify-start w-full overflow-y-auto gap-1 md:gap-3 py-2 lg:py-5">
                <SortableContext items={issueIds}>
                    {issues.map((issue) => (
                        <SortableIssueCard issue={issue} key={issue.id} />
                    ))}
                </SortableContext>
            </div>
        </div>
    )
}
