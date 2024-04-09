export const getRepoName = (url: string) => {
    // Get the repository name from the URL
    if (url.includes('.com/')) {
        return url.split('.com/')[1].split('/issues')[0]
    }
}

export const getRepo = (url: string) => {
    // Get the repository name from part of the URL
    return url.split('/')[1]
}
