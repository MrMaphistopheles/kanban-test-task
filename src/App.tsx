import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Board from './components/Board'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from './components/ErrorFallback'

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary
                FallbackComponent={Fallback}
                onReset={() => {
                    queryClient.resetQueries()
                }}
            >
                <Board />
            </ErrorBoundary>
        </QueryClientProvider>
    )
}
