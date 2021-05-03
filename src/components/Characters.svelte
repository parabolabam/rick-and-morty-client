<style scoped>
.character {
  margin: 0.5rem;
}

.characters__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

<script lang="ts">
import Modal from 'svelte-simple-modal';
import {
  getCharacters,
  TCharacterGender,
} from '../data-sources/characters.data-source';
import Character from './Character.svelte';

let page: number = 1;
let nameFilter: string;
let gender: TCharacterGender = null;

const genderOptions = [
  { value: 'Male', text: 'Male' },
  { value: 'Female', text: 'Female' },
  { value: null, text: 'No Gender' },
];

$: characters = getCharacters({
  page: page || 1,
  filter: { name: nameFilter, gender },
});
</script>

<input bind:value="{page}" type="number" required />
<input bind:value="{nameFilter}" type="text" />
<select name="genders" bind:value="{gender}">
  {#each genderOptions as gender}
    <option value="{gender.value}">{gender.text}</option>
  {/each}
</select>

{#await characters}
  <p>waiting...</p>
{:then charactersFromApi}
  <div class="characters__container">
    {#each charactersFromApi as character}
      <Modal>
        <div class="character">
          <Character character="{character}" />
        </div>
      </Modal>
    {/each}
  </div>
{:catch error}
  <p style="color: red">{error}</p>
{/await}
