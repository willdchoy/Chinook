<script lang="ts">
  import "../styles/base.css"
  import Header from "$lib/features/header/Header.svelte"
  import favicon from "$lib/assets/favicon.svg"
  import Player from "$lib/components/player/Player.svelte"

  let { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="layout-container">
  <Header />
  <div class="layout-content">
    <main>
      {@render children()}
    </main>
    <Player />
  </div>
</div>
