<script lang="ts">
import type { TSelectOption } from './types';

export let name = '';
export let value = '';
export let options: TSelectOption[];
</script>

<label>
  <slot />
  <select name="{name}" bind:value>
    {#each options as option}
      <option value="{option.value}">
        <slot name="option">{option.text}</slot>
      </option>
    {/each}
  </select>
</label>
