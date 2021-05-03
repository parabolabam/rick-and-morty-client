import type { TSessionStorageKey } from './types';

const sessionStorage = window.sessionStorage;

export * from './keys';

/* @Side effect */
export function getItemByKey<T>(key: TSessionStorageKey): T {
  return JSON.parse(sessionStorage.getItem(key) || '');
}

/* @Side effect */
export function setItemByKey(key: TSessionStorageKey, item: string): void {
  sessionStorage.setItem(key, item);
}

/* @Side effect */
export function removeItem(key: TSessionStorageKey): void {
  sessionStorage.removeItem(key);
}
