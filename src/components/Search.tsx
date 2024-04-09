import { useQuery } from '@tanstack/react-query'
import { Button, Input } from 'antd'
import { getIssue } from '../api/git'
import { IssueArray } from '../types/issues'
import { useStore } from '../store'
import { ChangeEvent, useEffect } from 'react'
import { getRepo, getRepoName } from '../utils/getRepoName'
import { sortData } from '../utils/sortData'

/**
 * This component allows the user to search for a repository and load its issues.
 */
export default function Search() {
    const { search, setSearch, setData, setSearchHistory, searchHistory } =
        useStore()

    // Handle input change
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value
        const repoName = getRepoName(input) // Extract repo and owner name from URL
        if (!repoName) return

        setSearch(repoName) // Set search state
    }

    // Fetch issues from the API
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['search'],
        queryFn: () => getIssue(search) as Promise<IssueArray>,
        enabled: false,
    })

    // Sort and set the data
    useEffect(() => {
        const sessionStorageData = window.sessionStorage.getItem(
            getRepo(search)
        )

        if (sessionStorageData) {
            const parsedData = JSON.parse(sessionStorageData)
            setData(parsedData, getRepo(search))
        } else {
            if (!data) return () => {}
            const sortedData = sortData(data)
            setData(sortedData, getRepo(search))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, setData])

    // Set data from session storage
    useEffect(() => {
        const sessionStorageData = window.sessionStorage.getItem(
            getRepo(search)
        )

        if (sessionStorageData) {
            const parsedData = JSON.parse(sessionStorageData)
            setData(parsedData, getRepo(search))
        }
    }, [search, setData])

    return (
        <div className="flex items-center justify-center gap-2 pt-5 w-[80%]">
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
                    setSearchHistory([...searchHistory, search])
                }}
            >
                {isLoading ? 'Loading...' : 'Load Issues'}
            </Button>
        </div>
    )
}
