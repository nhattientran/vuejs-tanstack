import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosError, type InternalAxiosRequestConfig } from 'axios'

// Create axios instance with default config
const axiosInstance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request interceptor
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // Add auth token if available
        const token = localStorage.getItem('token')
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error: AxiosError) => {
        // Handle common errors
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // Handle unauthorized - clear token and redirect to login
                    localStorage.removeItem('token')
                    // window.location.href = '/login'
                    break
                case 403:
                    console.error('Access forbidden')
                    break
                case 404:
                    console.error('Resource not found')
                    break
                case 500:
                    console.error('Server error')
                    break
            }
        } else if (error.request) {
            console.error('Network error - no response received')
        }
        return Promise.reject(error)
    }
)

// Export axios instance
export default axiosInstance

// Export typed request methods for convenience
export const http = {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
        axiosInstance.get<T>(url, config).then(res => res.data),

    post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
        axiosInstance.post<T>(url, data, config).then(res => res.data),

    put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
        axiosInstance.put<T>(url, data, config).then(res => res.data),

    patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
        axiosInstance.patch<T>(url, data, config).then(res => res.data),

    delete: <T>(url: string, config?: AxiosRequestConfig) =>
        axiosInstance.delete<T>(url, config).then(res => res.data),
}
