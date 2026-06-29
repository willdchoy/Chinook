<script lang="ts">
  import Card from "$lib/components/card/Card.svelte"

  let { title = null, listItems } = $props()
  const maxListItems = 10
  const playlistTitle = () => title || "Top Albums of the Day"
</script>

<div class="list-view">
  <h6>
    {playlistTitle()}
  </h6>
  <div class="list-items">
    {#if listItems?.data?.length > 0}
      {#each listItems.data as listItem, i}
        {#if i < maxListItems}
          <Card cardType="grid" cardItem={listItem} />
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
      --min-card-size: 160px;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      margin-top: 0;

      @media (--cm-sm) {
        --min-card-size: 200px;
      }
    }
  }
</style>
