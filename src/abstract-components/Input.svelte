<script lang="ts">
export let placeholder = '';
export let value;
export let type = 'text';

const handleInput = (e) => {
  // in here, you can switch on type and implement
  // whatever behaviour you need
  value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
};
</script>

<label>
  <slot />
  <input
    type="{type}"
    value="{value}"
    placeholder="{placeholder}"
    on:input="{handleInput}" />
</label>
