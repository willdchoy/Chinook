<script lang="ts">
  import ListItem from "./ListItem/ListItem.svelte"

  let { albums } = $props()
</script>

<div class="list-view">
  <h3 class="title">Top Albums of the Day (1983 - 1997)</h3>
  <div class="list-items">
    <div class="direction">Prev</div>
    {#each albums.data as album}
      <ListItem {album} />
    {/each}
    <div class="direction">Next</div>
  </div>
</div>

<style>
  .list-view {
    .list-items {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 5px;
      padding-top: 10px;
      gap: 20px;

      .direction {
        display: none;
        color: var(--color-70);
      }
    }
  }
</style>
