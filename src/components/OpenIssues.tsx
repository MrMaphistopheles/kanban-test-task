import { Button } from 'antd'
import { useStore } from '../store'
import { getRepo } from '../utils/getRepoName'
import React from 'react'

export default function OpenIssues() {
    const { searchHistory, setSearch } = useStore()

    return (
        <div className="w-[70em] py-4 flex gap-3 items-center justify-start">
            {searchHistory.map((search, index) => (
                <React.Fragment key={index}>
                    <Button
                        type="text"
                        className="m-0"
                        onClick={() => setSearch(search)}
                    >
                        {getRepo(search)}
                    </Button>
                    {index === searchHistory.length - 1 ? null : <p>{'/'}</p>}
                </React.Fragment>
            ))}
        </div>
    )
}
