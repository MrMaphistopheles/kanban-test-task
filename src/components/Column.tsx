import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { Issue } from '../@types/issues'
import { SortableIssueCard } from './SortableIssueCard'
import { useMemo } from 'react'

export function Column({
    column,
    issues,
}: {
    column: { id: string; title: string }
    issues: Issue[]
}) {
    const issueIds = useMemo(() => issues.map((issue) => issue.id), [issues])

    const { attributes, listeners, setNodeRef } = useSortable({
        id: column.id,
        data: { type: 'column', column },
    })

    return (
        <div
            className="flex flex-col items-center justify-start gap-3 px-5 py-7 w-[25em] h-[35em] bg-slate-100 rounded-xl"
            ref={setNodeRef}
            {...attributes}
            {...listeners}
        >
            <h3 className="text-2xl">{column.title}</h3>
            <div className="flex flex-col items-center justify-start w-full overflow-y-auto gap-3 py-5">
                <SortableContext items={issueIds}>
                    {issues.map((issue) => (
                        <SortableIssueCard issue={issue} key={issue.id} />
                    ))}
                </SortableContext>
            </div>
        </div>
    )
}
