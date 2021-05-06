<style scoped>
.filters {
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}

.characters__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}
</style>

<script lang="ts">
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import Input from '../../abstract-components/Input.svelte';
import NumberInput from '../../abstract-components/NumberInput.svelte';
import SelectInput from '../../abstract-components/SelectInput.svelte';
import { getCharacters } from '../../data-sources/characters.data-source';
import type { Character } from '../../generated/graphql';
import type { TBehaviorSubjectProxy } from '../../global-types';
import CharacterComponent from './Character.svelte';

const getGengerOptions = () => {
  return [
    { value: 'Male', text: 'Male' },
    { value: 'Female', text: 'Female' },
    { value: 'Genderless', text: 'No Gender' },
    { value: 'unknown', text: 'Unknown' },
  ];
};

const genderProxy: TBehaviorSubjectProxy<Character['gender']> = {
  value$: new BehaviorSubject<Character['gender']>('Male'),

  set value(value: Character['gender']) {
    this.value$.next(value);
  },

  get value(): Character['gender'] {
    return this.value$.getValue();
  },
};

const pageProxy: TBehaviorSubjectProxy<number> = {
  value$: new BehaviorSubject(1),

  get value(): number {
    return this.value$.getValue();
  },

  set value(newPage: number) {
    this.value$.next(newPage);
  },
};

const nameFilterProxy: TBehaviorSubjectProxy<string> = {
  value$: new BehaviorSubject(''),

  get value(): string {
    return this.value$.getValue();
  },

  set value(newValue: string) {
    this.value$.next(newValue);
  },
};

const characters = combineLatest([
  pageProxy.value$,
  nameFilterProxy.value$,
  genderProxy.value$,
]).pipe(
  debounceTime(300),
  switchMap(([page, name, gender]) =>
    getCharacters({ page, filter: { name, gender } })
  )
);
</script>

<div class="filters">
  <NumberInput
    bind:value="{pageProxy.value}"
    max="{Number.MAX_SAFE_INTEGER}"
    min="{1}">
    Page
  </NumberInput>
  <Input bind:value="{nameFilterProxy.value}">Character Name</Input>
  <SelectInput
    name="genders"
    bind:value="{genderProxy.value}"
    options="{getGengerOptions()}">
    Character Gender
  </SelectInput>
</div>

<div class="characters__container">
  {#each $characters || [] as character}
    <CharacterComponent character="{character}" />
  {/each}
</div>
