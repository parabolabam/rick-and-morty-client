export function getRange(
  from: number,
  to: number,
  step = 1
): { array: number[]; from: number } {
  return Array.from({ length: to }).reduce<{ array: number[]; from: number }>(
    (memo, _, index) => {
      const incrementedFrom = index ? memo.from + step : memo.from;
      return {
        from: incrementedFrom,
        array: [...memo.array, incrementedFrom],
      };
    },
    {
      array: [],
      from,
    }
  );
}
