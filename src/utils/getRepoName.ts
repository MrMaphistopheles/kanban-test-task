export const getRepoName = (url: string) => {
    if (url.includes('.com/')) {
        return url.split('.com/')[1].split('/issues')[0]
    }
}
