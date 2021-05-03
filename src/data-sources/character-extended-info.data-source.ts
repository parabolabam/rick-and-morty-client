import { gql } from 'graphql-request';
import type { Character } from '../generated/graphql';
import { getGqlRequest } from '../services/graphql-api';
import * as characterQuery from '../graphql/queries/character.query.graphql';

export function getCharacterExtendedInfo(id: string): Promise<Character> {
  return (
    getGqlRequest()
      ?.request<{ character: Character }>(characterQuery, { id })
      .then((responce) => responce.character) || Promise.resolve(null)
  );
}
