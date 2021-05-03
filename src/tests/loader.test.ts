import { render } from '@testing-library/svelte';
import Loader from '../abstract-components/Loader.svelte';

it('it works', () => {
  const results = render(Loader);
  console.log(results);
  expect(() => results.getByText('Loading...')).not.toThrow();
});
