<script lang="ts">
  import Card from "$lib/components/card/Card.svelte"

  let { title = null, listItems } = $props()
  const maxListItems = 10
  const playlistTitle = () => title
</script>

<div class="list-view">
  {#if playlistTitle}
    <h3>
      {playlistTitle()}
    </h3>
  {/if}
  <div class="list-items">
    {#if listItems?.data?.length > 0}
      {#each listItems.data as listItem, i}
        {#if i < maxListItems}
          <Card cardType={() => "grid"} cardItem={listItem} />
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
      grid-template-columns: repeat(
        auto-fit,
        minmax(var(--min-card-size), 1fr)
      );
      gap: 5px;

      @media (--cm-sm) {
        --min-card-size: 200px;
      }
    }
  }
</style>
