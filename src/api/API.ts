import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

class API {
  API: AxiosInstance | undefined;
  constructor() {
    this.init();
  }

  async init() {
    const config = {
      ajaxSettings: {
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        timeout: 45000,
      },
      env: {
        apiUrl: 'https://web-dev.dev.kimo.ai',
      },
    };

    const axiosOptions = {
      baseURL: config.env.apiUrl,
      timeout: config.ajaxSettings.timeout,
      headers: config.ajaxSettings.headers,
    };
    this.API = axios.create(axiosOptions);
  }

  async get(url: string, headerData?: AxiosRequestConfig<{}>): Promise<any> {
    if (this.API) {
      return this.API.get(`${url}`, headerData);
    }
  }

  async post(url: string, data: {}) {
    return this.API?.post(`${url}`, {
      ...data,
    });
  }
}

const api = new API();
export default api;
