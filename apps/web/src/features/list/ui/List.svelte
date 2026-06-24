<script lang="ts">
  import Card from "$lib/components/card/Card.svelte"

  let { albums } = $props()
  const maxListItems = 10
  const playlistTitle = "Top Albums of the Day"
</script>

<div class="list-view">
  <h3 class="title">
    {playlistTitle} <span class="muted">(1983 - 1997)</span>
  </h3>
  <div class="list-items">
    {#if albums?.data?.length > 0}
      {#each albums.data as album, i}
        {#if i < maxListItems}
          <Card {album} />
        {/if}
      {/each}
    {:else}
      <div class="muted">No items are available</div>
    {/if}
  </div>
</div>

<style>
  .list-view {
    width: 100%;

    .list-items {
      @media (--cm-sm) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--p-md);
      }
    }
  }
</style>
