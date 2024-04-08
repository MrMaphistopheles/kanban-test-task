import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Board from './components/Board'

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="w-screen h-screen bg-slate-50 flex items-center flex-col justify-center gap-2">
                <Board />
            </div>
        </QueryClientProvider>
    )
}
