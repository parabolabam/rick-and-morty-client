export function debounce(
  callable: (...args: any[]) => any,
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
