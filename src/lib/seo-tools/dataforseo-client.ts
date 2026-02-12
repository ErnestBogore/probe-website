export interface DataForSeoResponse<T = unknown> {
  version: string;
  status_code: number;
  status_message: string;
  time: string;
  cost: number;
  tasks_count: number;
  tasks_error: number;
  tasks: {
    id: string;
    status_code: number;
    status_message: string;
    time: string;
    cost: number;
    result_count: number;
    path: string[];
    data: unknown;
    result: T[];
  }[];
}

export class DataForSeoError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public taskStatusCode?: number
  ) {
    super(message);
    this.name = 'DataForSeoError';
  }
}

class DataForSeoClient {
  private baseUrl = 'https://api.dataforseo.com/v3';
  private auth: string;

  constructor() {
    const login = process.env.DATAFORSEO_LOGIN;
    const password = process.env.DATAFORSEO_PASSWORD;

    if (!login || !password) {
      throw new Error('DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD must be set');
    }

    this.auth = btoa(`${login}:${password}`);
  }

  async post<T>(endpoint: string, body: unknown[]): Promise<DataForSeoResponse<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${this.auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(30000),
    });

    if (!response.ok) {
      throw new DataForSeoError(
        `DataForSEO API error: ${response.statusText}`,
        response.status
      );
    }

    const data: DataForSeoResponse<T> = await response.json();

    if (data.status_code !== 20000) {
      throw new DataForSeoError(
        data.status_message || 'DataForSEO request failed',
        data.status_code
      );
    }

    if (data.tasks?.[0]?.status_code !== 20000) {
      throw new DataForSeoError(
        data.tasks?.[0]?.status_message || 'DataForSEO task failed',
        data.status_code,
        data.tasks?.[0]?.status_code
      );
    }

    return data;
  }
}

let clientInstance: DataForSeoClient | null = null;

export function getDataForSeoClient(): DataForSeoClient {
  if (!clientInstance) {
    clientInstance = new DataForSeoClient();
  }
  return clientInstance;
}
