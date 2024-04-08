import React, { ErrorInfo } from 'react'

interface ErrorBoundaryProps {
    children: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
    error: Error | null
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {
            hasError: false,
            error: null,
        }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log the error
        console.error('Error:', error)
        console.error('Error Info:', errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center h-screen flex-col bg-slate-50 text-xl text-white w-full">
                    <div className="flex items-center justify-center rounded-b-xl rounded-l-xl bg-red-400 h-[20%] w-1/2 p-3">
                        <h1>
                            Something went wrong try to reload page or come back
                            later.
                        </h1>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary

// I use class components for ErrorBoundary because I want to use componentDidCatch lifecycle method to catch errors in the child components tree.
// I use getDerivedStateFromError to update the state when an error occurs.
