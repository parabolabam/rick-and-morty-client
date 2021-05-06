export function pipe(...functions: Function[]) {
  return (arg) => functions.reduce((v, f) => f(v), arg);
}
