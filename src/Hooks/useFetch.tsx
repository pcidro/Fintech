import React from "react";

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchData() {
      setData(null);
      setLoading(true);
      try {
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const json = (await response.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (erro) {
        if (!signal.aborted && erro instanceof Error) setError(erro.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
