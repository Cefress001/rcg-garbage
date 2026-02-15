import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
           <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center border border-slate-200">
             <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle size={32} />
             </div>
             <h1 className="text-2xl font-serif font-bold text-primary mb-4">Something went wrong</h1>
             <p className="text-slate-600 mb-6">We apologize for the inconvenience. Please refresh the page or try again later.</p>
             <button
               onClick={() => window.location.reload()}
               className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-accent transition duration-300"
             >
               Refresh Page
             </button>
             {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="mt-8 text-xs text-left bg-slate-100 p-4 rounded overflow-auto max-h-40 text-red-800 font-mono">
                    {this.state.error.toString()}
                </div>
             )}
           </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;