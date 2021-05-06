import type { BehaviorSubject } from 'rxjs';

export type TRickAndMortyAPIInfo = {
  rickAndMortyApi: TAPI;
  headers: HeadersInit;
};

export type TAPI = {
  grapghqlEndpoint: string;
  restEndpoint: string;
};

export type TObjectLiteral<T> = {
  [key: string]: T;
};

export interface TBehaviorSubjectProxy<V> {
  value$: BehaviorSubject<V>;
  value?: V;
}
