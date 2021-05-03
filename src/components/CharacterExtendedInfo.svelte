<style>
table {
  font-size: 1.5em;
  width: 100%;
}
</style>

<script lang="typescript">
import { getCharacterExtendedInfo } from '../data-sources/character-extended-info.data-source';

export let characterId: string;

const extendedChracter = getCharacterExtendedInfo(characterId);
</script>

{#await extendedChracter}
  waiting...
{:then character}
  <table>
    <tr>
      <th>Characterists</th>
      <th>Value</th>
    </tr>
    <tr>
      <td>Name</td>
      <td>{character.name}</td>
    </tr>
    <tr>
      <td>Origin</td>
      <td>
        {character.origin?.type ?? ''}
        {`${character.origin?.name},` ?? ''}&nbsp;{character.origin
          ?.dimension ?? ''}</td>
    </tr>
    <tr>
      <td>Status</td>
      <td>{character.status}</td>
    </tr>
  </table>
{:catch error}
  {error}
{/await}
