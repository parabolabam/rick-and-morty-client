<style scoped>
.character {
  cursor: default;
  transition: all 0.3s ease-in-out;
  margin: 1.5rem;
}

.character:hover {
  transform: scale(1.1, 1.1);
}

.icon {
  cursor: pointer;
}

img {
  border-radius: 10%;
}

figcaption {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-size: 24px;
}
.icon {
  padding-left: 15px;
}
</style>

<script lang="ts">
import { getContext } from 'svelte';
import type { Character } from '../../generated/graphql';
import { simpleModalContextKey } from '../../services/context-keys';
import CharacterExtendedInfo from './CharacterExtendedInfo.svelte';

export let character: Character;

const { open } = getContext(simpleModalContextKey);
const showCharacterExtendedInfo = () => {
  open(CharacterExtendedInfo, { characterId: character.id });
};
</script>

<figure class="character">
  <img src="{character.image}" alt="{character.name} image" />
  <figcaption>
    <span>{character.name}</span>
    <img
      on:click="{showCharacterExtendedInfo}"
      class="icon"
      alt="info icon"
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAwYzYuNjIzIDAgMTIgNS4zNzcgMTIgMTJzLTUuMzc3IDEyLTEyIDEyLTEyLTUuMzc3LTEyLTEyIDUuMzc3LTEyIDEyLTEyem0wIDFjNi4wNzEgMCAxMSA0LjkyOSAxMSAxMXMtNC45MjkgMTEtMTEgMTEtMTEtNC45MjktMTEtMTEgNC45MjktMTEgMTEtMTF6bS41IDE3aC0xdi05aDF2OXptLS41LTEyYy40NjYgMCAuODQ1LjM3OC44NDUuODQ1IDAgLjQ2Ni0uMzc5Ljg0NC0uODQ1Ljg0NC0uNDY2IDAtLjg0NS0uMzc4LS44NDUtLjg0NCAwLS40NjcuMzc5LS44NDUuODQ1LS44NDV6Ii8+PC9zdmc+" />
  </figcaption>
</figure>
