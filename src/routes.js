import { wrap } from 'svelte-spa-router/wrap';
import Loader from './abstract-components/Loader.svelte';

export default {
  '/': wrap({
    asyncComponent: () => import('./routes/Home.svelte'),
    loadingComponent: Loader,
    conditions: [(detail) => true],
  }),
  // The catch-all route must always be last
  '*': wrap({
    asyncComponent: () => import('./routes/NotFound.svelte'),
    loadingComponent: Loader,
  }),
};
