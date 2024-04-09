import { describe, it } from 'vitest'
import { getHowManyDaysAgo } from './howManyDaysAgo'

describe('getHowManyDaysAgo', () => {
    it('should return "today" for the current date', () => {
        const today = new Date().toLocaleDateString()
        const result = getHowManyDaysAgo(today)
        expect(result).toEqual('today')
    })

    it('should return "1 days ago" for a date one day in the past', () => {
        const yesterday = new Date(Date.now() - 86400000).toLocaleDateString()
        const result = getHowManyDaysAgo(yesterday)
        expect(result).toEqual('1 days ago')
    })

    it('should return "2 days ago" for a date two days in the past', () => {
        const twoDaysAgo = new Date(
            Date.now() - 2 * 86400000
        ).toLocaleDateString()
        const result = getHowManyDaysAgo(twoDaysAgo)
        expect(result).toEqual('2 days ago')
    })

    it('should return "7 days ago" for a date one week in the past', () => {
        const oneWeekAgo = new Date(
            Date.now() - 7 * 86400000
        ).toLocaleDateString()
        const result = getHowManyDaysAgo(oneWeekAgo)
        expect(result).toEqual('7 days ago')
    })
})
