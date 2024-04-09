import { describe, it } from 'vitest'
import { getRepoName } from './getRepoName'

describe('getRepoName', () => {
    it('should return the repository name from a valid URL', () => {
        const url = 'https://github.com/owner/repository/issues'
        const expected = 'owner/repository'
        const result = getRepoName(url)
        expect(result).toEqual(expected)
    })

    it('should return undefined for a URL without ".com/"', () => {
        const url = 'https://github/owner/repository/issues'
        const result = getRepoName(url)
        expect(result).toBeUndefined()
    })

    it('should return the repository name even if "/issues" is not present', () => {
        const url = 'https://github.com/owner/repository'
        const expected = 'owner/repository'
        const result = getRepoName(url)
        expect(result).toEqual(expected)
    })

    it('should return undefined for an invalid URL', () => {
        const url = 'invalid url'
        const result = getRepoName(url)
        expect(result).toBeUndefined()
    })
})
