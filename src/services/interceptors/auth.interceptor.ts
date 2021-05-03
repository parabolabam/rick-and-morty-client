import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { replace } from 'svelte-spa-router';

export function authInterceptor(): void {
  axios.interceptors.response.use(authResInterceptor, authErrorResInterceptor);
  axios.interceptors.request.use(authReqInterceptor);
}

function authResInterceptor(responce: AxiosResponse): AxiosResponse {
  return responce;
}

function authErrorResInterceptor(
  error: AxiosError
): Promise<AxiosError | null> {
  if (error?.response?.status === 401) {
    const authHeader = error.config.headers['WWW-Authenticate'];
    if (/is expired/.test(authHeader)) {
      replace('/login');
    } else {
      replace('/login');
    }
    return Promise.resolve(null);
  }
  return Promise.reject(error);
}

function authReqInterceptor(config: AxiosRequestConfig) {
  const accessToken = '';

  return {
    ...config,
    ...(accessToken
      ? {
          headers: { Authorization: `Bearer ${accessToken}` },
          withCredentials: true,
        }
      : {}),
  };
}
