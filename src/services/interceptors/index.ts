import { authInterceptor } from './auth.interceptor';

export function applyInterceptors() {
  authInterceptor();
}
