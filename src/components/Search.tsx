import { useQuery } from '@tanstack/react-query'
import { Button, Input } from 'antd'
import { getIssue } from '../api/git'
import { IssueArray } from '../@types/issues'
import { useStore } from '../store'
import { ChangeEvent, useEffect } from 'react'
import { getRepoName } from '../utils/getRepoName'
import { sortData } from '../utils/sortData'

export default function Search() {
    const { search, setSearch, setData } = useStore()

    // Handle input change
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value
        const repoName = getRepoName(input) // Extract repo and ovner name from URL
        if (!repoName) return
        setSearch(repoName) // Set search state
    }

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['search'],
        queryFn: () => getIssue(search) as Promise<IssueArray>,
        enabled: false,
    })

    useEffect(() => {
        const sessionStorageData = window.sessionStorage.getItem(search)
        console.log(sessionStorageData)

        if (sessionStorageData) {
            const parsedData = JSON.parse(sessionStorageData)
            setData(parsedData, search)

            console.log('Data fetched from session storage')
        } else {
            console.log('Data fetched from api')
            if (!data) return () => {}
            const sortedData = sortData(data)
            setData(sortedData, search)
        }
    }, [data, setData])

    return (
        <div className="flex items-center justify-center gap-2 pt-5 w-[73em]">
            <Input
                size="large"
                variant="outlined"
                placeholder="Enter repo URL"
                onChange={handleChange}
            />
            <Button
                size="large"
                type="default"
                onClick={() => {
                    refetch()
                }}
            >
                {isLoading ? 'Loading...' : 'Load Issues'}
            </Button>
        </div>
    )
}
