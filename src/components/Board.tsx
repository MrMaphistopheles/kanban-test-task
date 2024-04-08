import {
    DndContext,
    DragOverEvent,
    DragOverlay,
    DragStartEvent,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { Issue } from '../@types/issues'
import { useState } from 'react'
import { Column } from './Column'
import { SortableIssueCard } from './SortableIssueCard'
import Search from './Search'
import { useStore } from '../store'
import Link from './Link'
import { getRepo } from '../utils/getRepoName'
import OpenIssues from './OpenIssues'

const conlums = [
    {
        id: 'open',
        title: 'ToDo',
    },
    {
        id: 'progress',
        title: 'In Progress',
    },
    {
        id: 'closed',
        title: 'Done',
    },
]

function Board() {
    // Create a sensor to handle pointer events
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 1,
            },
        })
    )

    const [activeIssue, setActiveIssue] = useState<Issue | null>(null)

    const { search, issues, setData } = useStore()

    // Handle the start of a drag event
    function handleDragStart(event: DragStartEvent) {
        setActiveIssue(event.active.data.current?.issue) // Set the active issue
    }

    // Handle the drag over event
    function handleDragOver(event: DragOverEvent) {
        const { active, over } = event // Get the active and over items
        if (active.id === over?.id) return // Check if the active and over items are the same

        const isActiveIssue = active?.data.current?.type === 'issue' // Check if the active item is an issue
        const isOverColumn = over?.data.current?.type === 'column' // Check if the active item is a column
        const isOverIssue = over?.data.current?.type === 'issue' // Check if the over item is an issue

        if (isActiveIssue && isOverIssue) {
            // Check if the active item is an issue and the over item is an issue
            const IssueUpdate = (issues: Issue[]) => {
                const activeIndex = issues.findIndex(
                    (issue) => issue.id === active.id
                )
                const overIndex = issues.findIndex(
                    (issue) => issue.id === over.id
                )

                return arrayMove(issues, activeIndex, overIndex)
            }
            setData(IssueUpdate(issues), getRepo(search)) // Update the issues
        }

        if (isOverColumn && isActiveIssue) {
            // Check if the over item is a column and the active item is an issue
            const issuesUpdate = (issues: Issue[]) => {
                const activeIndex = issues.findIndex(
                    (issue) => issue.id === active.id
                )

                issues[activeIndex].state = String(over?.id)

                const data = arrayMove(issues, activeIndex, activeIndex)
                return data
            }

            setData(issuesUpdate(issues), getRepo(search)) // Update the issues
        }
    }

    return (
        <div className="w-screen h-screen bg-slate-50 flex items-center flex-col justify-center gap-2">
            <OpenIssues />
            <Search />
            <Link />

            <div className="flex items-center justify-center gap-2">
                <DndContext
                    sensors={sensors}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                >
                    {conlums.map((column) => (
                        <Column
                            column={column}
                            issues={issues.filter(
                                (issue) => issue.state === column.id
                            )}
                            key={column.id}
                        />
                    ))}
                    <DragOverlay>
                        {activeIssue ? (
                            <SortableIssueCard issue={activeIssue} />
                        ) : null}
                    </DragOverlay>
                </DndContext>
            </div>
        </div>
    )
}

export default Board
