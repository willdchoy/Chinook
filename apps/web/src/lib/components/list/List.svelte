<script lang="ts">
  import ListItem from "./ListItem/ListItem.svelte"

  let { albums } = $props()
  const maxListItems = 10
</script>

<div class="list-view">
  <h3 class="title">Top Albums of the Day (1983 - 1997)</h3>
  <div class="list-items">
    {#if albums?.data?.length > 0}
      {#each albums.data as album, i}
        {#if i < maxListItems}
          <ListItem {album} />
        {/if}
      {/each}
    {:else}
      <div class="white-muted">
        No items are available
      </div>
    {/if}
  </div>
</div>

<style>
  .list-view {
    .list-items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 10px;
      margin-top: 5px;
    }
  }
</style>
