export function getHowManyDaysAgo(date: string) {
    const today = new Date().toLocaleDateString() // get today's date

    const unixToday = new Date(today).getTime() / 1000 // convert today to unix

    const unix = new Date(date).getTime() / 1000 // convert date to unix

    const difference = (unixToday - unix) / 86400 // get the difference in days

    if (difference < 1) return 'today' //   if less than 1 day ago

    return difference.toFixed(0) + ' days ago' // if more than 1 day ago
}
