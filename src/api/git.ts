import axios from 'axios'
import { IssueArray } from '../@types/issues'

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getIssue = async (url: string): Promise<IssueArray | unknown> => {
    try {
        const res = await instance.get(
            `https://api.github.com/repos/${url}/issues`
        )
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export const getStarsCount = async (url: string) => {
    try {
        const res = await instance.get(`https://api.github.com/repos/${url}`)
        return res.data?.stargazers_count
    } catch (error) {
        console.log(error)
        return error
    }
}
