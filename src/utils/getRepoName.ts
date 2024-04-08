export const getRepoName = (url: string) => {
    if (url.includes('.com/')) {
        return url.split('.com/')[1].split('/issues')[0]
    }
}

export const getRepo = (url: string) => {
    return url.split('/')[1]
}
