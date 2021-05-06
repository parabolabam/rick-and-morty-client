<style>
.home__header {
  font-size: 10px;
}

@media screen and (max-width: 1044px) {
  .home__header {
    font-size: 14px;
  }
}
</style>

<script>
import Typewriter from 'svelte-typewriter';
import Characters from '../components/Characters-module/Characters.svelte';
</script>

<Typewriter loop interval="{200}">
  <h1 class="home__header"><mark>Rick & Morty</mark> World</h1>
</Typewriter>

<Characters />
