export function requestify<T, Error extends { message: string } | null>(
  promise: Promise<T>
): [boolean, Promise<T>, Error] {
  let initialValues = [true, promise, null] as [boolean, Promise<T>, Error];

  promise.then((result: T) => {});

  return initialValues;
}
