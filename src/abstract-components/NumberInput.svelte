<script lang="ts">
export let value = 0;
export let max = 0;
export let min = Infinity;
</script>

<label>
  <slot />
  <input bind:value type="number" min="{min}" max="{max}" />
</label>
