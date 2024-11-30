class HTTPError extends Error {
  readonly response: unknown;
  readonly status: number;
  readonly statusText: string;

  constructor(status: number, statusText: string, response: unknown) {
    super(statusText);
    this.status = status;
    this.statusText = statusText;
    this.response = response;
  }
}

export default function createRequest(baseURL: string) {
  function makeRequest(method: string) {
    return async <TResponse>(url: string, body?: Record<string, unknown>) => {
      const res = await fetch(`${baseURL}${url}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const response = await res.json();
      if (!res.ok) throw new HTTPError(res.status, res.statusText, response);
      return response as TResponse;
    };
  }

  return {
    get: makeRequest('GET'),
    post: makeRequest('POST'),
    delete: makeRequest('DELETE'),
    put: makeRequest('PUT'),
    patch: makeRequest('PATCH'),
  };
}
