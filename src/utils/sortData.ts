import { Issue } from '../@types/issues'

export const sortData = (fetchData: Issue[]) => {
    // Create a copy of the fetched data
    const copy = [...fetchData]

    // Map over the copied data and return a new array
    const data = copy.map((issue) => {
        return {
            ...issue,
            state:
                issue.created_at === issue.updated_at // Check if the issue was updated
                    ? 'open' // Set the state to open
                    : issue.state === 'closed' // Check if the issue is closed
                      ? 'closed' // Set the state to closed
                      : 'progress', // Set the state to progress
        }
    })
    return data
}
