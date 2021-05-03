import { initGqlClient } from './graphql-api';

export async function setupGqlClient(): Promise<void> {
  await initGqlClient();
}
