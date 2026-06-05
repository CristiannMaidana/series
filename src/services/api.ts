const API_BASE_URL = 'https://api.tvmaze.com';
const API_TIMEOUT_MS = 5000;

export async function apiFetch(path: string) {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      signal: AbortSignal.timeout(API_TIMEOUT_MS),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error && error.name === 'TimeoutError') {
      throw new Error(`API timeout after ${API_TIMEOUT_MS}ms`);
    }

    if (error instanceof Error) {
      throw new Error(`API request failed: ${error.message}`);
    }

    throw new Error('API request failed');
  }
}
