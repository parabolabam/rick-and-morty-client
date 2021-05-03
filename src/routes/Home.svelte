<style>
h1 {
  color: blue;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
}
</style>

<script>
import Typewriter from 'svelte-typewriter';
import Characters from '../components/Characters-module/Characters.svelte';
</script>

<Typewriter loop interval="{200}">
  <h1>Welcome To <mark>The</mark> Rick & Morty World</h1>
</Typewriter>

<Characters />
