import { GraphQLClient } from 'graphql-request';
import type { TRickAndMortyAPIInfo } from '../../global-types';
import { get } from '../rest-api';

const GQL_CLIENT_KEY = 'gqlResuest';
const hashMap: Map<string, GraphQLClient | null> = new Map([
  [GQL_CLIENT_KEY, null],
]);

export function getGraphqlRequestSingletonFactory(
  endpoint: string,
  headers: HeadersInit
): GraphQLClient {
  return new GraphQLClient(endpoint, { headers });
}

async function getGqlConfig(): Promise<TRickAndMortyAPIInfo> {
  return await get<TRickAndMortyAPIInfo>('/config.json');
}

export function initGqlClient(): Promise<void> {
  return getGqlConfig()
    .then(({ rickAndMortyApi, headers }) =>
      getGraphqlRequestSingletonFactory(
        rickAndMortyApi.grapghqlEndpoint,
        headers
      )
    )
    .then((reqObject) => {
      hashMap.set(GQL_CLIENT_KEY, reqObject);
    });
}

export function getGqlRequest(): GraphQLClient | null | undefined {
  return hashMap.get(GQL_CLIENT_KEY);
}
