<script lang="ts">
export let value = 0;
export let max = Infinity;
export let min = 0;
</script>

<label>
  <slot />
  <input bind:value type="number" min="{min}" max="{max}" />
</label>
