/**
 * Custom React hooks for data fetching
 */

'use client';

import { useState, useEffect } from 'react';

interface UseApiOptions {
  immediate?: boolean; // Whether to fetch immediately on mount
}

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

/**
 * Generic hook for API calls with loading and error states
 */
export function useApi<T>(
  fetcher: () => Promise<{ data?: T; error?: string }>,
  options: UseApiOptions = { immediate: true }
) {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: options.immediate ?? true,
    error: null,
  });

  const execute = async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const response = await fetcher();

      if (response.error) {
        setState({ data: null, loading: false, error: response.error });
      } else {
        setState({ data: response.data ?? null, loading: false, error: null });
      }
    } catch (err) {
      setState({
        data: null,
        loading: false,
        error: err instanceof Error ? err.message : 'An error occurred',
      });
    }
  };

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
    refetch: execute,
  };
}

/**
 * Hook for mutations (POST, PUT, DELETE)
 */
export function useMutation<TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<{ data?: TData; error?: string }>
) {
  const [state, setState] = useState<UseApiState<TData>>({
    data: null,
    loading: false,
    error: null,
  });

  const mutate = async (variables: TVariables) => {
    setState({ data: null, loading: true, error: null });

    try {
      const response = await mutationFn(variables);

      if (response.error) {
        setState({ data: null, loading: false, error: response.error });
        return { success: false, error: response.error };
      } else {
        setState({ data: response.data ?? null, loading: false, error: null });
        return { success: true, data: response.data };
      }
    } catch (err) {
      const error = err instanceof Error ? err.message : 'An error occurred';
      setState({ data: null, loading: false, error });
      return { success: false, error };
    }
  };

  const reset = () => {
    setState({ data: null, loading: false, error: null });
  };

  return {
    ...state,
    mutate,
    reset,
  };
}
