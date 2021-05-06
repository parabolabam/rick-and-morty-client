<style>
main {
  text-align: center;
  margin: 0 auto;
}
</style>

<script lang="ts">
import Router from 'svelte-spa-router';
import Modal from 'svelte-simple-modal';
import routes from './routes';
</script>

<!-- to provide context -->
<Modal>
  <main>
    <Router routes="{routes}" />
  </main>
</Modal>
