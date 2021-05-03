import axios from 'axios';
import type { TObjectLiteral } from './types';

export function get<T>(url: string): Promise<T> {
  return axios.get<T>(url).then(({ data }) => data);
}

export function post<T>(
  url: string,
  body: TObjectLiteral<unknown>
): Promise<T> {
  // TODO: add error handling
  return axios
    .post<T>(url, { body })
    .then(({ data }) => data);
}
