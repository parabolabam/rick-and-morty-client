import App from './App.svelte';
import './global.css';
import { setupGqlClient } from './services/setup-app';

let app;

(async function () {
  await setupGqlClient();
})().then(() => {
  app = new App({
    target: document.body,
  });
});

export default app;
