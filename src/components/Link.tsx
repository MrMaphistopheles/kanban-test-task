import { useStore } from '../store'
import StarCount from './StarCount'

export default function Link() {
    const { search } = useStore()

    const owner = search.split('/')[0]
    const lib = search.split('/')[1]

    if (search === '') {
        return (
            <div className="w-[75%] py-4 flex gap-3 items-center justify-start" />
        )
    }
    return (
        <div className="w-[80%] py-4 flex gap-3 items-center justify-start">
            <a href={`https://github.com/${owner}`} className=" no-underline">
                {owner}
            </a>
            {'>'}
            <a
                href={`https://github.com/${owner}/${lib}`}
                className=" no-underline"
            >
                {lib}
            </a>
            <StarCount />
        </div>
    )
}
