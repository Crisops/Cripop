import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import type { ApiClientOptions, ApiError, ApiResult, HttpMethod } from '@/types/axios'
import { env } from '@/config/env'

class AxiosClient {
  private client: AxiosInstance

  constructor(options: ApiClientOptions = {}) {
    const defaultURL = options.baseURL || env.TMDB_BASE_URL

    this.client = axios.create({
      baseURL: defaultURL,
      timeout: options.timeout || 10000,
      headers: {
        Authorization: `Bearer ${env.SECRET_TOKEN_ACCESS}`,
        Accept: 'application/json',
        ...options.headers,
      },
    })
  }

  async request<T = any>(
    method: HttpMethod,
    url: string,
    data: any = null,
    config: AxiosRequestConfig = {},
  ): Promise<ApiResult<T>> {
    try {
      const response: AxiosResponse<T> = await this.client({
        method,
        url,
        data,
        ...config,
      })

      return {
        success: true,
        data: response.data,
        status: response.status,
        message: response.statusText,
      }
    } catch (error) {
      return this.handleError(error as AxiosError)
    }
  }

  private handleError(error: AxiosError): ApiError {
    if (error.response) {
      return {
        success: false,
        error: {
          message: error.message || 'Error del servidor',
          status: error.response.status,
          data: error.response.data,
          type: 'server',
        },
      }
    } else if (error.request) {
      return {
        success: false,
        error: {
          message: 'Error de conexión',
          type: 'network',
        },
      }
    } else {
      return {
        success: false,
        error: {
          message: error.message,
          type: 'config',
        },
      }
    }
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResult<T>> {
    return this.request<T>('GET', url, null, config)
  }
}

export default new AxiosClient()

export { AxiosClient }
