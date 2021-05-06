export function debounce<T>(
  callable: (...args: any[]) => T,
  debounceTime: number
) {
  let timer;

  return (...args: any[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callable.call(this, ...args);
    }, debounceTime);
  };
}
