import { gql } from 'graphql-request';
import { getGqlRequest } from '../services/graphql-api';

export type TExtendedCharacter = {
  id: string;
  name: String;
  status: String;
  species: String;
  type: string;
  gender: string;
  origin: TLocation;
};

export type TLocation = {
  id: string;
  name: string;
  type: string;
  dimension: string;
};

export type TEpisode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
};

const characterDN = gql`
  query($id: ID!) {
    character(id: $id) {
      id
      status
      name
      type
      episode {
        id
        name
        air_date
        episode
      }
      origin {
        id
        name
        type
        dimension
      }
    }
  }
`;

export function getCharacterExtendedInfo(
  id: string
): Promise<TExtendedCharacter> {
  return (
    getGqlRequest()
      ?.request<{ character: TExtendedCharacter }>(characterDN, { id })
      .then((responce) => responce.character) || Promise.resolve(null)
  );
}
