type FetchRequestConfig = {
    baseURL?: string;
    headers?: Record<string, string>;
    withCredentials?: boolean;
  };
  
  const fetchParams: FetchRequestConfig = {
    baseURL:'https://api.spacexdata.com',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    withCredentials: false,
  };
  
  export const api = (version: 'v1' | 'v2' | 'v3' | 'v4' | 'v5'= 'v1') => {
    const baseURL = `${fetchParams.baseURL}/${version}`;
  
    const handleResponse = async (response: Response) => {
      if (!response.ok) {
        const error = await response.json();
        return Promise.reject(error);
      }
      return response.json();
    };
  
    const fetchWithConfig = async <T>(
      method: string,
      url: string,
      body?: unknown,
      config: FetchRequestConfig = {}
    ): Promise<T> => {
      const headers = { ...fetchParams.headers, ...config.headers };
  
      const response = await fetch(`${baseURL}${url}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
      });
  
      return handleResponse(response);
    };
  
    return {
      get: <T>(url: string, config: FetchRequestConfig = {}) =>
        fetchWithConfig<T>('GET', url, undefined, config),
      delete: <T>(url: string, config: FetchRequestConfig = {}) =>
        fetchWithConfig<T>('DELETE', url, undefined, config),
      post: <T>(url: string, body: unknown, config: FetchRequestConfig = {}) =>
        fetchWithConfig<T>('POST', url, body, config),
      patch: <T>(url: string, body: unknown, config: FetchRequestConfig = {}) =>
        fetchWithConfig<T>('PATCH', url, body, config),
      put: <T>(url: string, body: unknown, config: FetchRequestConfig = {}) =>
        fetchWithConfig<T>('PUT', url, body, config),
    };
  };
  
  export default api;