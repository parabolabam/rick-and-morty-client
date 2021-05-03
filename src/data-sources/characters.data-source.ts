import { gql } from 'graphql-request';
import type { Character } from '../generated/graphql';
import { getGqlRequest } from '../services/graphql-api';
import * as charactersQuery from '../graphql/queries/characters.query.graphql';

export type TCharacterGender = 'Male' | 'Female' | null;

export type TCharactersParams = {
  page: number;
  filter: TCharacterFitler;
};

export type TCharacterFitler = {
  name: string;
  gender: Character['gender'];
};

export type TCharacter = {
  name: string;
  image: string;
  id: string;
};

export type TRequestResult = {
  characters: {
    info: { count: number };
    results: TCharacter[];
  };
};

export const getCharacters: (
  variables: TCharactersParams
) => Promise<Character[]> = (variables: TCharactersParams) => {
  return (
    getGqlRequest()
      ?.request<TRequestResult>(charactersQuery, variables)
      .then((responce: TRequestResult) => responce.characters.results) ||
    Promise.resolve([])
  );
};
