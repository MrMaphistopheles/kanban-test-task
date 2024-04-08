import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Board from './components/Board'
import ErrorBoundary from './components/ErrorBoundary'

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary>
                <Board />
            </ErrorBoundary>
        </QueryClientProvider>
    )
}
