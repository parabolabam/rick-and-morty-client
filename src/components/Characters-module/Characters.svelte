<style scoped>
.characters__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.filters {
  padding: 1rem;
  display: flex;
  justify-content: space-around;
}
</style>

<script lang="ts">
import Loader from '../../abstract-components/Loader.svelte';
import NumberInput from '../../abstract-components/NumberInput.svelte';
import SelectInput from '../../abstract-components/SelectInput.svelte';
import Input from '../../abstract-components/Input.svelte';
import { getCharacters } from '../../data-sources/characters.data-source';
import type { Character } from '../../generated/graphql';
import NotFound from '../../routes/NotFound.svelte';
import CharacterComponent from './Character.svelte';

let page = 1;
let nameFilter = '';
let gender: Character['gender'] = 'Male';

const genderOptions: { value: Character['gender']; text: string }[] = [
  { value: 'Male', text: 'Male' },
  { value: 'Female', text: 'Female' },
  { value: 'Genderless', text: 'No Gender' },
  { value: 'unknown', text: 'Unknown' },
];

$: characters = getCharacters({
  page: page || 1,
  filter: { name: nameFilter, gender },
});
</script>

<div class="filters">
  <NumberInput bind:value="{page}" max="{Number.MAX_SAFE_INTEGER}" min="{1}">
    Page
  </NumberInput>
  <Input bind:value="{nameFilter}">Character Name</Input>
  <SelectInput name="genders" bind:value="{gender}" options="{genderOptions}">
    Character Gender
  </SelectInput>
</div>

{#await characters}
  <Loader />
{:then charactersFromApi}
  {#if charactersFromApi.length < 1}
    <NotFound />
  {:else}
    <div class="characters__container">
      {#each charactersFromApi as character}
        <CharacterComponent character="{character}" />
      {/each}
    </div>
  {/if}
{:catch}
  <NotFound />
{/await}
