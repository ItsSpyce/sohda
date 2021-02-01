import { Component, ComponentType, ErrorInfo, PropsWithChildren } from 'react';

type ErrorBoundaryProps = {
  onError: (err: Error, info: ErrorInfo) => boolean | undefined;
};

type ErrorBoundaryState = {
  error?: Error;
};

export default class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>
> {
  state: ErrorBoundaryState = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(err: Error, info: ErrorInfo) {
    this.props.onError(err, info);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    this.setState({ error: undefined });
  }

  render() {
    return this.state.error ? <h1>An error occured</h1> : this.props.children!;
  }
}

export function withErrorBoundary<P>(
  Component: ComponentType<P>,
  errorBoundaryProps: ErrorBoundaryProps
) {
  const wrapped: ComponentType<P> = (props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  const name = Component.displayName || Component.name || 'Component';
  wrapped.displayName = `withErrorBoundary(${name})`;
  return wrapped;
}
