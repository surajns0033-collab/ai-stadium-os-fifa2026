/**
 * @module ErrorBoundary
 * @description React Error Boundary component for graceful error handling.
 * Catches rendering errors in child components and displays a fallback UI
 * instead of crashing the entire application.
 * 
 * Usage:
 * ```tsx
 * <ErrorBoundary fallback={<p>Something went wrong</p>}>
 *   <ComponentThatMightFail />
 * </ErrorBoundary>
 * ```
 * 
 * @see https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */
"use client";
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryProps {
  /** Child components to wrap with error protection */
  children: ReactNode;
  /** Optional custom fallback UI */
  fallback?: ReactNode;
  /** Module name for error logging context */
  moduleName?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary catches JavaScript errors in child component trees,
 * logs the error, and renders a fallback UI. Essential for production
 * stability in a mission-critical stadium operations platform.
 */
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // In production, this would send to an error monitoring service
    console.error(
      `[ErrorBoundary] ${this.props.moduleName || 'Unknown Module'}:`,
      error,
      errorInfo.componentStack
    );
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          role="alert"
          aria-live="assertive"
          className="flex flex-col items-center justify-center p-8 bg-slate-900/60 border border-red-500/30 rounded-2xl text-center"
        >
          <AlertTriangle className="text-red-400 mb-3" size={32} />
          <h3 className="text-white font-semibold mb-1">
            Module Error: {this.props.moduleName || 'Unknown'}
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={this.handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors"
            aria-label="Retry loading this module"
          >
            <RefreshCw size={14} />
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
