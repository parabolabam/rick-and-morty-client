<script lang="ts">
export let value: string = '';
</script>

<label>
  <slot />
  <input bind:value type="password" />
</label>
