import { gql } from 'graphql-request';
import { getGqlRequest } from '../services/graphql-api';

export type TCharacterGender = 'Male' | 'Female' | null;

export type TCharactersParams = {
  page: number;
  filter: TCharacterFitler;
};

export type TCharacterFitler = {
  name: string;
  gender: TCharacterGender;
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

const charactersDN = gql`
  query($page: Int!, $filter: FilterCharacter!) {
    characters(page: $page, filter: $filter) {
      info {
        count
      }
      results {
        name
        image
        id
      }
    }
  }
`;

export const getCharacters: (
  variables: TCharactersParams
) => Promise<TCharacter[]> = (variables: TCharactersParams) => {
  return (
    getGqlRequest()
      ?.request<TRequestResult>(charactersDN, variables)
      .then((responce: TRequestResult) => responce.characters.results) ||
    Promise.resolve([])
  );
};
