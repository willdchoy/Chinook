<script lang="ts">
  import "$lib/styles/base.css"
  import Header from "$lib/components/header/Header.svelte"
  import Player from "$lib/components/player/Player.svelte"

  let { children } = $props()
</script>

<div class="layout-container">
  <Header />
  <div class="layout-content">
    <main>
      {@render children()}
    </main>
    <Player />
  </div>
</div>
